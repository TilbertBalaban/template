import { getApiExample } from '../../utils/api/getApiExample';

const VehiclesContainer = () => {
  const {
    data: vehicles,
  } = getApiExample.useGetVehiclesQuery(0);

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
