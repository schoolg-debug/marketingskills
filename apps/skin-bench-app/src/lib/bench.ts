import { BENCHES, PRICE, type PriceRec, type Row } from '@/data/bench'

export const SCREEN_LABEL: Record<string, string> = {
  g: 'Clear',
  y: 'Parent flag',
  w: 'Closed suit',
  r: 'Excluded',
  o: 'Controversy',
  m: 'Mixed',
}

export const SCREEN_TONE: Record<string, string> = {
  g: 'text-clear bg-clear-wash',
  y: 'text-flag bg-flag-wash',
  w: 'text-closed bg-closed-wash',
  r: 'text-excluded bg-excluded-wash',
  o: 'text-contro bg-contro-wash',
  m: 'text-closed bg-closed-wash',
}

export const ROLE_LABEL: Record<string, string> = {
  L: 'Slot leader',
  C: 'Current',
  B: 'Bench',
  S: 'Skip',
  P: 'Planned buy',
}

export function price(name: string): PriceRec | null {
  return PRICE[name] ?? null
}

export function money(n: number): string {
  return '$' + (n % 1 === 0 ? n.toFixed(0) : n.toFixed(2))
}

export interface PricedItem {
  name: string
  benchKey: string
  bench: string
  slot: string
  role: string
  p: PriceRec
}

/** Every distinct product that carries a price, with its bench context. */
export function pricedItems(): PricedItem[] {
  const seen = new Set<string>()
  const out: PricedItem[] = []
  for (const [key, b] of Object.entries(BENCHES)) {
    for (const r of b.rows) {
      if (seen.has(r[0])) continue
      seen.add(r[0])
      const p = price(r[0])
      if (p && p[0]) out.push({ name: r[0], benchKey: key, bench: b.label, slot: r[1], role: r[2], p })
    }
  }
  return out
}

/** A larger SKU exists that covers the full quarter in one purchase. */
const BULK_YES = /jumbo|32 oz|450 ml|500 ml|20 oz|2-pack|twin pack|XL |refill|6-month|Mega |25 oz|60 ml|larger|bigger/i
const BULK_NO = /no jumbo|no larger|no bigger/i
export function isBulkWin(p: PriceRec): boolean {
  return BULK_YES.test(p[6]) && !BULK_NO.test(p[6])
}

/** Strip the parenthetical "(current)" markers for display in tight rows. */
export function cleanName(s: string): string {
  return s.replace(/ \(current[^)]*\)/, '').split(' · ')[0]
}

export function benchTotals() {
  const items = pricedItems()
  const owned = items.filter((i) => i.role.includes('C') && i.p[4])
  const leaders = items.filter((i) => i.role.includes('L') && i.p[4])
  return {
    items,
    owned,
    leaders,
    ownedTotal: owned.reduce((a, i) => a + i.p[5], 0),
    leaderTotal: leaders.reduce((a, i) => a + i.p[5], 0),
    verified: items.filter((i) => i.p[7]).length,
    onSale: items.filter((i) => i.p[1]),
    bulk: items.filter((i) => isBulkWin(i.p)),
  }
}

export function matchesQuery(r: Row, q: string): boolean {
  if (!q) return true
  return (r[0] + ' ' + r[1] + ' ' + r[4] + ' ' + r[5]).toLowerCase().includes(q)
}

export function slotsOf(rows: Row[]): string[] {
  return [...new Set(rows.map((r) => r[1]))]
}
