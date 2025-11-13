import { useMemo, useState } from 'react';
import fleet from '../../data/fleet.json';
import { FleetFilter } from '../../components/fleet-filter';
import { VehicleCard } from '../../components/vehicle-card';
import { Modal } from '../../components/ui/modal';
import { defaultFleetFilters, filterFleet, type FleetFilters, type FleetVehicle } from '../../lib/filters';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { usePageMetadata } from '../../lib/seo';

export default function FleetRoute() {
  usePageMetadata({
    title: 'Aegis Black | Armored Fleet',
    description: 'Filter armored sedans, SUVs, vans, and limos from Cadillac, Mercedes, BMW, and Land Rover with B4–B7 protection.',
  });
  const [filters, setFilters] = useState<FleetFilters>(defaultFleetFilters);
  const [selected, setSelected] = useState<FleetVehicle | null>(null);

  const vehicles = fleet as FleetVehicle[];
  const filtered = useMemo(() => filterFleet(vehicles, filters), [filters, vehicles]);

  return (
    <section className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.5em] text-white/40">Fleet</p>
        <h1 className="text-4xl font-serif">Luxury + armored vehicles with vetted drivers</h1>
        <p className="text-sm text-white/70">
          Every chassis undergoes ballistic certification, secure comms installation, and preventative maintenance. Filter by type, armoring band, and passenger count to plan convoy compositions.
        </p>
      </header>
      <FleetFilter filters={filters} onChange={setFilters} />
      {filtered.length === 0 ? (
        <p className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/60">
          No vehicles match the current criteria. Adjust filters or contact ops for custom sourcing.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} onSelect={setSelected} />
          ))}
        </div>
      )}

      <Modal open={Boolean(selected)} title={selected ? `${selected.make} ${selected.model}` : ''} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {selected.images.map((image) => (
                <img key={image} src={image} alt={selected.model} className="h-56 w-full rounded-2xl object-cover" loading="lazy" />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge>{selected.type}</Badge>
              <Badge variant="outline">Armoring {selected.armoring}</Badge>
              <Badge variant="success">Seats {selected.capacity}</Badge>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Spec label="Powertrain" value={selected.specs.powertrain} />
              <Spec label="Drive" value={selected.specs.drive} />
              <Spec label="Range" value={`${selected.specs.range_km} km`} />
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.4em] text-white/40">Amenities</h4>
              <ul className="mt-3 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
                {selected.amenities.map((amenity) => (
                  <li key={amenity}>• {amenity}</li>
                ))}
              </ul>
            </div>
            <Button className="w-full">Book vehicle + protection detail</Button>
          </div>
        )}
      </Modal>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.4em] text-white/40">{label}</p>
      <p className="mt-2 text-lg text-brand-ivory">{value}</p>
    </div>
  );
}
