import type { FleetFilters } from '../lib/filters';
import { Input } from './ui/input';
import { cn } from '../lib/utils';

const typeOptions = ['Sedan', 'SUV', 'Van', 'Limo', 'Armored'];
const armoringOptions = ['B4', 'B5', 'B6', 'B7'];

export function FleetFilter({ filters, onChange }: { filters: FleetFilters; onChange: (next: FleetFilters) => void }) {
  const toggle = (list: string[], value: string) =>
    list.includes(value) ? list.filter((item) => item !== value) : [...list, value];

  return (
    <div className="glass-panel rounded-3xl border border-white/10 p-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/40">Vehicle Type</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {typeOptions.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => onChange({ ...filters, types: toggle(filters.types, type) })}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm text-white/70 transition',
                  filters.types.includes(type)
                    ? 'border-brand-gold/80 bg-brand-gold/20 text-brand-gold'
                    : 'border-white/10 bg-white/5 hover:border-white/40',
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/40">Armoring</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {armoringOptions.map((armoring) => (
              <button
                key={armoring}
                type="button"
                onClick={() => onChange({ ...filters, armoring: toggle(filters.armoring, armoring) })}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm text-white/70 transition',
                  filters.armoring.includes(armoring)
                    ? 'border-brand-gold/80 bg-brand-gold/20 text-brand-gold'
                    : 'border-white/10 bg-white/5 hover:border-white/40',
                )}
              >
                {armoring}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/40">Capacity ≥</p>
          <Input
            type="number"
            min={1}
            value={String(filters.capacity)}
            onChange={(event) => onChange({ ...filters, capacity: Number(event.target.value || 1) })}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
}
