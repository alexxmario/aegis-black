import type { FleetVehicle } from '../lib/filters';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function VehicleCard({ vehicle, onSelect }: { vehicle: FleetVehicle; onSelect: (vehicle: FleetVehicle) => void }) {
  return (
    <article className="glass-panel flex flex-col rounded-3xl border border-white/10">
      <div className="overflow-hidden rounded-3xl">
        <img src={vehicle.images[0]} alt={`${vehicle.make} ${vehicle.model}`} className="h-48 w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <Badge>{vehicle.type}</Badge>
          <span className="text-sm uppercase tracking-[0.4em] text-white/50">{vehicle.armoring}</span>
        </div>
        <div>
          <h3 className="text-2xl font-serif text-brand-ivory">
            {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-sm text-white/70">{vehicle.year} • Seats {vehicle.capacity}</p>
        </div>
        <ul className="text-sm text-white/70">
          {vehicle.amenities.slice(0, 3).map((amenity) => (
            <li key={amenity}>• {amenity}</li>
          ))}
        </ul>
        <Button className="mt-auto" onClick={() => onSelect(vehicle)}>
          View dossier
        </Button>
      </div>
    </article>
  );
}
