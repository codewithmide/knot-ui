import { NextResponse } from "next/server"
import { createCipheriv, randomBytes } from "crypto"

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE || "https://api.useknot.xyz").replace(/\/+$/, "")
const STATS_API_SECRET = (process.env.STATS_API_SECRET || process.env.NEXT_STATS_API_SECRET) as string

function buildStatsToken() {
  const key = Buffer.from(STATS_API_SECRET, "base64")
  if (key.length !== 32) {
    throw new Error("Invalid STATS_API_SECRET")
  }

  const iv = randomBytes(12)
  const payload = JSON.stringify({ ts: Date.now(), scope: "stats" })

  const cipher = createCipheriv("aes-256-gcm", key, iv)
  const ciphertext = Buffer.concat([cipher.update(payload, "utf8"), cipher.final()])
  const tag = cipher.getAuthTag()

  return Buffer.concat([iv, ciphertext, tag]).toString("base64")
}

export async function GET() {
  try {
    if (!STATS_API_SECRET) {
      throw new Error("STATS_API_SECRET missing")
    }

    const token = buildStatsToken()

    const response = await fetch(`${API_BASE}/stats`, {
      method: "GET",
      headers: { "X-Stats-Token": token },
      cache: "no-store",
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    return NextResponse.json(
      { status: false, message: "Failed to fetch stats", error: String(error) },
      { status: 500 }
    )
  }
}
