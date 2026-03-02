import { Check } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Register with email",
    description:
      "Initiate authentication with your email. An OTP code will be sent for verification.",
  },
  {
    step: "02",
    title: "Complete verification",
    description:
      "Submit the OTP code to receive your session token and Solana wallet address.",
  },
  {
    step: "03",
    title: "Start transacting",
    description:
      "Use your session token to transfer tokens, trade on Jupiter, provide liquidity on Meteora, trade prediction markets on Kalshi, and more.",
  },
]

const rules = [
  "Never share your sessionToken in logs, repos, or public channels",
  "Confirm amount and recipient before any transfer or trade",
  "If a transaction is rejected by policy, do not retry to bypass the limit",
  "Your Solana address is public — you can share it freely",
  "Check market liquidity before buying prediction contracts",
]

export function QuickstartSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Quick Start
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Three steps to your first transaction
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
