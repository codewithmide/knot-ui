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
      "Use your session token to transfer SOL/SPL tokens, trade on Jupiter, sign messages, and manage your wallet.",
  },
]

const rules = [
  "Never share your sessionToken in logs, repos, or public channels",
  "Confirm amount and recipient before any transfer",
  "If a transfer is rejected by policy, do not retry with a larger amount",
  "Your Solana address is public you can share it freely",
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

        {/* Rules card */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-border bg-card p-8">
          <h3 className="text-lg font-semibold text-foreground">
            Security Rules
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Follow these guidelines to keep your agent wallet safe.
          </p>
          <ul className="mt-6 space-y-4">
            {rules.map((rule) => (
              <li key={rule} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {rule}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
