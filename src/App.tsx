import './App.css';
import { PostsContainer } from './views/containers/Posts';
import { ItemsContainer } from './views/containers/Items';
import { VehiclesContainer } from './views/containers/Vehicles';

const App = () => (
  <div className="App">
    <VehiclesContainer />
    <ItemsContainer />
    <PostsContainer />
  </div>
);

export default App;
