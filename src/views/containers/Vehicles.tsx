import { FC } from 'react';
import { z } from 'zod';
import { getApiExample } from '../../utils/api/getApiExample';

const typeValidator = z.object({
  unusedProp: z.string().min(5).max(10).optional(),
});

type Props = z.infer<typeof typeValidator>;

const VehiclesContainer: FC<Props> = ({ unusedProp = '' }) => {
  const { data: vehicles } = getApiExample.useGetVehiclesQuery(0);

  try {
    typeValidator.parse({ unusedProp });
  } catch (e) {
    console.log(e);
  }

  return (
    <div>
      {vehicles?.map((vehicle: any) => (
        <p key={vehicle.name}>{vehicle.name}</p>
      ))}
    </div>
  );
};

export { VehiclesContainer };
