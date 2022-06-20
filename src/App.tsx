import './App.css';
import fetchStarships from './redux/actions/fetchStarships';
import { useTypedDispatch, useTypedSelector } from './redux/hooks';

function App() {
  const { starships, error } = useTypedSelector((state) => state.starshipsRoot);

  const dispatch = useTypedDispatch();
  console.log(starships);
  return (
    <div className="App">
      {error && <div>{error}</div>}
      {starships.length
        ? (
          <div>
            { starships.map((starship) => (
              <div>
                {starship.name}
              </div>
            ))}
          </div>
        )
        : 'load'}
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
}

export default App;
