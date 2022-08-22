import './App.css';
import { StarshipsContainer } from './views/containers/Starships';
import { VehiclesContainer } from './views/containers/Vehicles';

const App = () => (
  <div className="App">
    <VehiclesContainer />
    <StarshipsContainer />
  </div>
);

export default App;
