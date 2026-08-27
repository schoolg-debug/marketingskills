import { useEffect, useMemo, useRef, useState } from 'react'
import { BENCHES, BONUS, LIT } from '@/data/bench'
import { pricedItems, price } from '@/lib/bench'
import { StatusPill } from '@/components/bits'
import { cn } from '@/lib/utils'
import { Search, Monitor, Smartphone, Home as HomeIcon, Layers, DollarSign, Sparkles, Repeat, Scale } from 'lucide-react'

import Home from '@/views/Home'
import BenchView from '@/views/BenchView'
import Prices from '@/views/Prices'
import Bonus from '@/views/Bonus'
import Procedures from '@/views/Procedures'
import Brands from '@/views/Brands'
import Scent from '@/views/Scent'

type Mode = 'desktop' | 'phone'

const NAV: { group: string; items: { id: string; bench?: string; icon: string; label: string; n?: number }[] }[] = [
  { group: 'Overview', items: [{ id: 'home', icon: '⌂', label: 'Home' }] },
  {
    group: 'Variety Bench',
    items: [
      ...Object.entries(BENCHES).map(([k, b]) => ({ id: 'bench', bench: k, icon: b.icon, label: b.label, n: b.rows.length })),
      { id: 'scent', icon: '🌫️', label: 'Scent Bench', n: 8 },
    ],
  },
  { group: 'Money', items: [{ id: 'prices', icon: '💰', label: 'Price Watch' }] },
  {
    group: 'Programs',
    items: [
      { id: 'bonus', icon: '🫧', label: 'Bonus Shelf', n: BONUS.length },
      { id: 'proc', icon: '🔁', label: 'Procedure Swaps' },
    ],
  },
  { group: 'Screens', items: [{ id: 'brands', icon: '⚖️', label: 'Brands & Audit', n: LIT.length }] },
]

const TABS = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'bench', label: 'Benches', Icon: Layers },
  { id: 'prices', label: 'Prices', Icon: DollarSign },
  { id: 'bonus', label: 'Bonus', Icon: Sparkles },
  { id: 'proc', label: 'Swaps', Icon: Repeat },
  { id: 'brands', label: 'Brands', Icon: Scale },
]

function GlobalSearch({ query, onGo }: { query: string; onGo: (v: string, b?: string) => void }) {
  const q = query.toLowerCase()
  const hits = useMemo(() => {
    const out: { name: string; where: string; slot: string; why: string; screen?: string; light?: string; go: [string, string?] }[] = []
    for (const [k, b] of Object.entries(BENCHES)) {
      for (const r of b.rows) {
        if ((r[0] + r[1] + r[4] + r[5]).toLowerCase().includes(q))
          out.push({ name: r[0], where: `${b.icon} ${b.label}`, slot: r[1], why: r[5], screen: r[3], go: ['bench', k] })
      }
    }
    for (const r of BONUS) {
      if ((r[0] + r[1] + r[7] + r[8]).toLowerCase().includes(q))
        out.push({ name: r[0], where: '🫧 Bonus Shelf', slot: r[1], why: r[7], light: r[2], go: ['bonus'] })
    }
    return out
  }, [q])

  const LIGHT: Record<string, string> = {
    g: 'text-clear bg-clear-wash',
    y: 'text-flag bg-flag-wash',
    r: 'text-excluded bg-excluded-wash',
  }

  return (
    <div className="view-in">
      <h1 className="font-display text-[23px] font-bold tracking-[-0.015em]">Search — “{query}”</h1>
      <p className="mb-4 mt-1 text-[13.5px] text-dim">{hits.length} matches across every bench.</p>
      {hits.length === 0 && <div className="px-5 py-12 text-center text-[13.5px] text-faint">No matches anywhere on the bench.</div>}
      <div className="flex flex-col gap-2">
        {hits.slice(0, 60).map((h, i) => {
          const p = price(h.name)
          return (
            <button
              key={h.name + i}
              onClick={() => onGo(h.go[0], h.go[1])}
              className="border border-hairline bg-panel px-4 py-3 text-left transition-colors hover:border-signal/45"
            >
              <div className="flex items-start gap-2.5">
                <span className="flex-1 text-[14px] font-semibold leading-snug">{h.name}</span>
                {h.screen ? (
                  <StatusPill code={h.screen} />
                ) : (
                  <span className={cn('rounded-full px-2 py-[3px] text-[11px] font-semibold', LIGHT[h.light!] ?? '')}>
                    {h.light === 'g' ? 'Green' : h.light === 'y' ? 'Amber' : 'Red'}
                  </span>
                )}
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px]">
                <span className="rounded-full bg-signal-wash px-2 py-[2px] font-semibold text-signal-ink">{h.where}</span>
                <span className="text-faint">{h.slot}</span>
                {p && p[0] && <span className="font-mono font-semibold text-dim">${p[0]}</span>}
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-dim">{h.why}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function App() {
  const [mode, setMode] = useState<Mode>(() => {
    try {
      const s = localStorage.getItem('sb-mode')
      if (s === 'phone' || s === 'desktop') return s
    } catch {
      /* private mode — fall through to the width heuristic */
    }
    return typeof matchMedia !== 'undefined' && matchMedia('(max-width:759px)').matches ? 'phone' : 'desktop'
  })
  const [view, setView] = useState('home')
  const [bench, setBench] = useState('face')
  const [query, setQuery] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const phone = mode === 'phone'

  useEffect(() => {
    try {
      localStorage.setItem('sb-mode', mode)
    } catch {
      /* nothing to persist to — the choice just won't survive a reload */
    }
  }, [mode])

  function go(v: string, b?: string) {
    setView(v)
    if (b) setBench(b)
    setQuery('')
    scrollRef.current?.scrollTo({ top: 0 })
    window.scrollTo({ top: 0 })
  }

  const searching = query.trim().length > 0
  const priced = pricedItems().length

  const body = searching ? (
    <GlobalSearch query={query} onGo={go} />
  ) : view === 'home' ? (
    <Home onGo={go} phone={phone} />
  ) : view === 'bench' ? (
    <BenchView benchKey={bench} query={query} phone={phone} />
  ) : view === 'scent' ? (
    <Scent query={query} />
  ) : view === 'prices' ? (
    <Prices query={query} phone={phone} />
  ) : view === 'bonus' ? (
    <Bonus query={query} phone={phone} />
  ) : view === 'proc' ? (
    <Procedures query={query} phone={phone} />
  ) : (
    <Brands query={query} phone={phone} />
  )

  const shell = (
    <div
      className={cn(
        'flex min-h-0 flex-col bg-ground',
        phone
          ? 'relative h-[min(880px,calc(100vh-56px))] w-[414px] max-w-full overflow-hidden border border-hairline2 shadow-2xl max-[759px]:h-screen max-[759px]:w-full max-[759px]:border-0 max-[759px]:shadow-none'
          : 'mx-auto min-h-screen w-full max-w-[1440px]'
      )}
      style={phone ? { borderRadius: 40, outline: '8px solid hsl(216 20% 4%)' } : undefined}
    >
      {/* header */}
      <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-hairline bg-ground px-4 py-2.5 md:px-5">
        <div className="flex shrink-0 items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center bg-signal text-[15px]" style={{ borderRadius: 2 }}>
            🧴
          </div>
          <div className="leading-tight">
            <b className="block font-display text-[15px] font-bold tracking-[-0.01em]">Skin Bench</b>
            {!phone && (
              <span className="block font-mono text-[9.5px] uppercase tracking-[0.14em] text-faint">
                Aesthetic Protocol HQ
              </span>
            )}
          </div>
        </div>

        {!phone && (
          <div className="relative ml-3 max-w-[500px] flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-faint" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${priced} priced products, brands, slots…`}
              className="w-full border border-hairline bg-panel py-2 pl-9 pr-3 text-[13.5px] outline-none placeholder:text-faint focus:border-signal"
              style={{ borderRadius: 3 }}
            />
          </div>
        )}

        <div
          className="ml-auto flex shrink-0 gap-0.5 border border-hairline bg-panel p-0.5"
          style={{ borderRadius: 3 }}
          role="group"
          aria-label="Layout mode"
        >
          {([
            ['desktop', Monitor, 'Desktop'],
            ['phone', Smartphone, 'Phone'],
          ] as const).map(([m, Icon, label]) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              title={`${label} mode`}
              className={cn(
                'flex items-center gap-1.5 px-2.5 py-1.5 text-[12.5px] font-semibold transition-colors',
                mode === m ? 'bg-raised text-ink' : 'text-dim hover:text-ink'
              )}
              style={{ borderRadius: 2 }}
            >
              <Icon className="h-3.5 w-3.5" />
              {!phone && label}
            </button>
          ))}
        </div>
      </header>

      {/* phone search */}
      {phone && (
        <div className="relative border-b border-hairline px-4 py-2">
          <Search className="pointer-events-none absolute left-7 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-faint" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the benches…"
            className="w-full border border-hairline bg-panel py-2 pl-9 pr-3 text-[13.5px] outline-none placeholder:text-faint focus:border-signal"
            style={{ borderRadius: 3 }}
          />
        </div>
      )}

      {/* body */}
      <div ref={scrollRef} className={cn('flex min-h-0 flex-1', phone && 'overflow-y-auto overscroll-contain no-scrollbar')}>
        {!phone && (
          <nav className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-[232px] shrink-0 flex-col gap-0.5 overflow-y-auto border-r border-hairline px-2.5 py-4 thin-scroll md:flex">
            {NAV.map((sec) => (
              <div key={sec.group}>
                <div className="px-2.5 pb-1.5 pt-3.5 font-display text-[9.5px] font-bold uppercase tracking-[0.16em] text-faint first:pt-0">
                  {sec.group}
                </div>
                {sec.items.map((it) => {
                  const on = it.id === 'bench' ? view === 'bench' && bench === it.bench : view === it.id
                  return (
                    <button
                      key={it.label}
                      onClick={() => go(it.id, it.bench)}
                      className={cn(
                        'flex w-full items-center gap-2.5 px-2.5 py-[7px] text-left text-[13.5px] transition-colors',
                        on ? 'bg-signal-wash font-semibold text-signal-ink' : 'text-dim hover:bg-raised hover:text-ink'
                      )}
                      style={{ borderRadius: 2 }}
                    >
                      <span className="w-[18px] shrink-0 text-center">{it.icon}</span>
                      <span className="flex-1 truncate">{it.label}</span>
                      {it.n !== undefined && <span className="font-mono text-[10.5px] text-faint">{it.n}</span>}
                    </button>
                  )
                })}
              </div>
            ))}
          </nav>
        )}

        <main className={cn('min-w-0 flex-1', phone ? 'px-4 pb-28 pt-3' : 'px-6 pb-16 pt-5')}>{body}</main>
      </div>

      {/* phone tab bar */}
      {phone && (
        <nav
          className="absolute inset-x-0 bottom-0 z-50 flex border-t border-hairline bg-ground px-1.5 pt-1.5"
          style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}
        >
          {TABS.map(({ id, label, Icon }) => {
            const on = id === 'bench' ? view === 'bench' || view === 'scent' : view === id
            return (
              <button
                key={id}
                onClick={() => go(id, id === 'bench' ? bench : undefined)}
                className={cn(
                  'flex flex-1 flex-col items-center gap-0.5 py-1 text-[9.5px] font-semibold transition-colors',
                  on ? 'text-signal-ink' : 'text-faint'
                )}
              >
                <Icon className={cn('h-[18px] w-[18px] transition-transform', on && '-translate-y-px')} />
                {label}
              </button>
            )
          })}
        </nav>
      )}
    </div>
  )

  return <div className={cn('min-h-screen bg-ground', phone && 'flex justify-center py-7 max-[759px]:p-0')}>{shell}</div>
}
