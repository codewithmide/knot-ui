import {
  Shield,
  ArrowLeftRight,
  Wallet,
  Droplets,
  TrendingUp,
  Settings2,
  Bell,
  Fingerprint,
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "TEE-Secured Keys",
    description:
      "Private keys never leave the Trusted Execution Environment. Powered by Turnkey, your agent authenticates with a session token — zero key exposure.",
  },
  {
    icon: ArrowLeftRight,
    title: "Jupiter DEX Trading",
    description:
      "Swap any token on Solana through Jupiter aggregator. SOL, USDC, USDT, JUP, BONK, or any mint address with configurable slippage.",
  },
  {
    icon: Wallet,
    title: "Transfer SOL & SPL",
    description:
      "Send SOL and USDC with a single API call. Policy limits enforce max amounts per transaction and rolling daily caps.",
  },
  {
    icon: Droplets,
    title: "Meteora DLMM Liquidity",
    description:
      "Provide liquidity to Meteora DLMM pools and earn trading fees. Add two-sided or one-sided positions, claim rewards, and withdraw anytime.",
  },
  {
    icon: TrendingUp,
    title: "Kalshi Prediction Markets",
    description:
      "Trade on regulated prediction markets across crypto, sports, politics, and more. USDC flows directly between your wallet and Kalshi.",
  },
  {
    icon: Settings2,
    title: "Granular Policy Controls",
    description:
      "Set per-transaction USD limits, daily caps, recipient whitelists, and toggle trading, LP, or prediction markets on/off per wallet.",
  },
  {
    icon: Bell,
    title: "Auto Deposit Tracking",
    description:
      "Incoming SOL and SPL token deposits are detected in real-time via Helius webhooks. No polling or manual checks needed.",
  },
  {
    icon: Fingerprint,
    title: "Idempotent Mutations",
    description:
      "Every financial endpoint supports an Idempotency-Key header. Safely retry transfers, trades, and LP operations without double-execution.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Capabilities
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything an agent needs to transact on Solana
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            From secure key management to DeFi liquidity and prediction markets,
            Knot provides the full financial toolkit for autonomous agents.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-secondary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
