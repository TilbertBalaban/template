import { PostsContainer } from './views/containers/Posts';
import { ItemsContainer } from './views/containers/Items';
import { VehiclesContainer } from './views/containers/Vehicles';
import { GraphQlAndApolloExample } from './views/containers/GraphQlAndApolloExample';

const App = () => (
  <div className="App">
    <VehiclesContainer />
    <ItemsContainer />
    <PostsContainer />
    <GraphQlAndApolloExample />
  </div>
);

export default App;
