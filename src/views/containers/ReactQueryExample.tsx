import { useQuery, useMutation, useQueryClient } from 'react-query';
import { simpleGetRequest } from 'utils/api/simpleGetRequest';
import { simplePostRequest } from 'utils/api/simplePostRequest';

export const ReactQueryExample = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isRefetching } = useQuery(
    'vehicles',
    simpleGetRequest,
  );

  const mutation = useMutation(simplePostRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries('vehicles');
    },
  });
  return (
    <div>
      <h1>ReactQueryExample</h1>
      {!isRefetching &&
        data?.map((vehicle) => <p key={vehicle.name}>{vehicle.name}</p>)}
      {isLoading && <p>Loading...</p>}
      {isRefetching && <p>Refetching...</p>}

      <button
        onClick={() => {
          mutation.mutate({
            title: 'title',
            body: 'body',
            userId: 0,
          });
        }}
        type="button"
      >
        Add item
      </button>
    </div>
  );
};
