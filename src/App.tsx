import { PostsContainer } from './views/containers/Posts';
import { ItemsContainer } from './views/containers/Items';
import { VehiclesContainer } from './views/containers/Vehicles';
import { GraphQlAndApolloExample } from './views/containers/GraphQlAndApolloExample';
import { HeaderContainer } from './views/containers/Header';

const App = () => (
  <div data-testid="home">
    <HeaderContainer />
    <VehiclesContainer />
    <ItemsContainer />
    <PostsContainer />
    <GraphQlAndApolloExample />
  </div>
);

export default App;
