import { cn } from '@/lib/utils'
import { SCREEN_LABEL, SCREEN_TONE, ROLE_LABEL, price, money } from '@/lib/bench'

/* --- status + role -------------------------------------------------- */

export function StatusPill({ code }: { code: string }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-[3px] text-[11px] font-semibold leading-none',
        SCREEN_TONE[code] ?? SCREEN_TONE.w
      )}
    >
      <span className="h-[5px] w-[5px] rounded-full bg-current opacity-80" />
      {SCREEN_LABEL[code] ?? '—'}
    </span>
  )
}

const ROLE_TONE: Record<string, string> = {
  L: 'text-flag border-flag/40',
  C: 'text-signal-ink border-signal/40',
  B: 'text-faint border-hairline2',
  S: 'text-excluded border-excluded/40',
  P: 'text-clear border-clear/40',
}

export function RolePills({ roles }: { roles: string }) {
  return (
    <span className="inline-flex flex-wrap gap-1">
      {roles.split('').map((r) => (
        <span
          key={r}
          className={cn(
            'rounded-full border px-2 py-[2px] text-[10.5px] font-semibold uppercase tracking-wide leading-none',
            ROLE_TONE[r] ?? ROLE_TONE.B
          )}
        >
          {ROLE_LABEL[r] ?? r}
        </span>
      ))}
    </span>
  )
}

/* --- price ---------------------------------------------------------- */

export function PriceCell({ name }: { name: string }) {
  const p = price(name)
  if (!p) return <span className="text-[12px] italic text-faint">Not yet priced</span>
  if (!p[0]) return <span className="text-[12px] text-faint">—</span>

  return (
    <div className="whitespace-nowrap">
      <span
        title={
          p[7]
            ? undefined
            : "List price carried from the brand's own page. The weekly refresh re-checks it at the retailer."
        }
        className={cn(
          'font-display text-[15px] font-bold tabular-nums',
          !p[7] && 'cursor-help border-b border-dotted border-faint'
        )}
      >
        {money(p[0])}
      </span>
      {!!p[1] && (
        <>
          <span className="ml-1.5 text-[11px] text-faint line-through tabular-nums">{money(p[1])}</span>
          <span className="ml-1.5 rounded-sm bg-clear-wash px-1 py-px align-[1px] text-[9.5px] font-extrabold uppercase tracking-wider text-clear">
            Sale
          </span>
        </>
      )}
      <span className="mt-0.5 block text-[10.5px] text-faint">
        {p[2]} · {p[3]}
      </span>
    </div>
  )
}

export function QuarterCell({ name, compact = false }: { name: string; compact?: boolean }) {
  const p = price(name)
  if (!p || !p[4]) return <span className="text-[12px] text-faint">—</span>
  const one = p[4] <= 1
  return (
    <div className="whitespace-nowrap">
      <span className="font-display text-[14px] font-bold tabular-nums text-signal-ink">{money(p[5])}</span>
      <span
        className={cn(
          'ml-2 rounded-sm px-1.5 py-px text-[9.5px] font-extrabold uppercase tracking-wider',
          one ? 'bg-clear-wash text-clear' : 'bg-flag-wash text-flag'
        )}
      >
        {one ? '1 buy' : `${p[4]}×`}
      </span>
      <span className="mt-0.5 block text-[10.5px] text-faint">
        {p[4] === 0.5 ? 'one box covers 2 quarters' : `${p[4]} × ${p[2]} per 90 days`}
      </span>
      {!compact && <span className="mt-1.5 block max-w-[260px] whitespace-normal text-[11.5px] leading-snug text-dim">{p[6]}</span>}
    </div>
  )
}

/* --- structure ------------------------------------------------------ */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1.5 font-display text-[10.5px] font-bold uppercase tracking-[0.18em] text-signal-ink">
      {children}
    </div>
  )
}

export function ViewHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <header className="mb-5">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="font-display text-[23px] font-bold leading-tight tracking-[-0.015em] text-balance">{title}</h1>
      {sub && <p className="mt-1.5 max-w-[68ch] text-[13.5px] text-dim">{sub}</p>}
    </header>
  )
}

export function SectionRule({ label, count }: { label: string; count?: React.ReactNode }) {
  return (
    <div className="mb-2.5 mt-7 flex items-center gap-3 first:mt-4">
      <span className="font-display text-[14.5px] font-semibold">{label}</span>
      {count !== undefined && <span className="font-mono text-[11px] text-faint">{count}</span>}
      <span className="h-px flex-1 bg-hairline" />
    </div>
  )
}

export function NoteCard({ children, tone = 'signal' }: { children: React.ReactNode; tone?: 'signal' | 'excluded' | 'clear' | 'flag' }) {
  const edge = {
    signal: 'border-l-signal',
    excluded: 'border-l-excluded',
    clear: 'border-l-clear',
    flag: 'border-l-flag',
  }[tone]
  return (
    <div className={cn('border border-l-[3px] border-hairline bg-panel px-4 py-3 text-[13px] leading-relaxed text-dim', edge)}>
      {children}
    </div>
  )
}

export function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('border border-hairline bg-panel', className)}>{children}</div>
}

export function Empty({ children }: { children: React.ReactNode }) {
  return <div className="px-5 py-12 text-center text-[13.5px] text-faint">{children}</div>
}
