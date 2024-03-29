import { fetchItems } from '../../redux/actions/createAsyncThunkExample';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';

export const ItemsContainer = () => {
  const { items, isLoading, error } = useTypedSelector(
    (state) => state.sliceWithRequestExample,
  );

  const dispatch = useTypedDispatch();

  return (
    <div>
      {error && <div>{error}</div>}
      {items.length ? (
        <div id="items-list">
          {items.map((item) => (
            <div key={item.model}>{item.name}</div>
          ))}
        </div>
      ) : null}
      {isLoading && <span>Loading...</span>}
      <button
        onClick={() => {
          dispatch(fetchItems());
        }}
        id="load-items-btn"
        type="button"
      >
        load items
      </button>
    </div>
  );
};
