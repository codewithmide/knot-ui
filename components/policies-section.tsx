const policies = [
  {
    field: "maxSingleTransferSol",
    type: "number",
    defaultVal: "1",
    description: "Max SOL per transaction",
  },
  {
    field: "dailyLimitSol",
    type: "number",
    defaultVal: "5",
    description: "Rolling 24h SOL limit",
  },
  {
    field: "allowedRecipients",
    type: "string[]",
    defaultVal: "[]",
    description: "Recipient whitelist (empty = all allowed)",
  },
  {
    field: "allowTrading",
    type: "boolean",
    defaultVal: "true",
    description: "Enable/disable token swaps",
  },
  {
    field: "sessionExpirationHours",
    type: "number",
    defaultVal: "168",
    description: "Session lifetime in hours (168 = 7 days)",
  },
]

export function PoliciesSection() {
  return (
    <section id="policies" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Policy Engine
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Guardrails your agent can respect
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Configure per-wallet spending limits, recipient whitelists, and
            feature toggles. Update policies at any time
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          {/* Table header */}
          <div className="hidden grid-cols-12 gap-4 bg-secondary px-6 py-3 md:grid">
            <div className="col-span-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Field
            </div>
            <div className="col-span-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Type
            </div>
            <div className="col-span-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Default
            </div>
            <div className="col-span-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Description
            </div>
          </div>

          {/* Table rows */}
          {policies.map((policy, idx) => (
            <div
              key={policy.field}
              className={`grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-12 md:gap-4 md:items-center ${
                idx !== policies.length - 1 ? "border-b border-border" : ""
              } bg-card transition-colors hover:bg-secondary/50`}
            >
              <div className="md:col-span-4">
                <span className="text-xs text-muted-foreground md:hidden">
                  {"Field: "}
                </span>
                <p className=" text-sm text-foreground">
                  {policy.field}
                </p>
              </div>
              <div className="md:col-span-2">
                <span className="text-xs text-muted-foreground md:hidden">
                  {"Type: "}
                </span>
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">
                  {policy.type}
                </span>
              </div>
              <div className="md:col-span-2">
                <span className="text-xs text-muted-foreground md:hidden">
                  {"Default: "}
                </span>
                <p className=" text-sm text-muted-foreground">
                  {policy.defaultVal}
                </p>
              </div>
              <div className="md:col-span-4">
                <span className="text-xs text-muted-foreground md:hidden">
                  {"Description: "}
                </span>
                <span className="text-sm text-muted-foreground">
                  {policy.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
