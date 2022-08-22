import fetchStarships from '../../redux/actions/fetchStarships';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';

const StarshipsContainer = () => {
  const { starships, isLoading, error } = useTypedSelector((state) => state.starshipsRoot);

  const dispatch = useTypedDispatch();

  return (
    <div>
      {error && <div>{error}</div>}
      {starships.length
        ? (
          <div>
            { starships.map((starship) => (
              <div key={starship.model}>
                {starship.name}
              </div>
            ))}
          </div>
        )
        : null}
      {isLoading && <span>Loading...</span>}
      <button
        onClick={() => {
          dispatch(fetchStarships());
        }}
        type="button"
      >
        load ships
      </button>
    </div>
  );
};

export { StarshipsContainer };
