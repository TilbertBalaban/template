import './App.css';
import { PostsContainer } from './views/containers/Posts';
import { StarshipsContainer } from './views/containers/Starships';
import { VehiclesContainer } from './views/containers/Vehicles';

const App = () => (
  <div className="App">
    <VehiclesContainer />
    <StarshipsContainer />
    <PostsContainer />
  </div>
);

export default App;
