import { vehiclesApi } from '../../utils/vehiclesApi';

const VehiclesContainer = () => {
  const {
    data: vehicles,
  } = vehiclesApi.useGetVehiclesQuery(0);

  return (
    <div>
      {vehicles?.map((vehicle: any) => (
        <p key={vehicle.name}>
          {vehicle.name}
        </p>
      ))}
    </div>
  );
};

export { VehiclesContainer };
