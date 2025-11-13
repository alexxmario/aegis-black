export type FleetVehicle = {
  slug: string;
  type: string;
  make: string;
  model: string;
  year: number;
  armoring: string;
  capacity: number;
  amenities: string[];
  images: string[];
  specs: {
    powertrain: string;
    drive: string;
    range_km: number;
  };
};

export type FleetFilters = {
  types: string[];
  armoring: string[];
  capacity: number;
};

export const defaultFleetFilters: FleetFilters = {
  types: [],
  armoring: [],
  capacity: 1,
};

export function filterFleet(vehicles: FleetVehicle[], filters: FleetFilters) {
  return vehicles.filter((vehicle) => {
    const matchesType =
      filters.types.length === 0 || filters.types.includes(vehicle.type);
    const matchesArmoring =
      filters.armoring.length === 0 || filters.armoring.some((grade) => vehicle.armoring.includes(grade));
    const matchesCapacity = vehicle.capacity >= filters.capacity;
    return matchesType && matchesArmoring && matchesCapacity;
  });
}
