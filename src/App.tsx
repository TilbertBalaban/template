import { PostsContainer } from './views/containers/Posts';
import { ItemsContainer } from './views/containers/Items';
import { VehiclesContainer } from './views/containers/Vehicles';
import { GraphQlAndApolloExample } from './views/containers/GraphQlAndApolloExample';
import { HeaderContainer } from './views/containers/Header';
import { SpyingFrog } from './views/containers/SpyingFrog/SpyingFrog';

const App = () => (
  <div data-testid="home">
    <HeaderContainer />
    <SpyingFrog />
    <VehiclesContainer />
    <ItemsContainer />
    <PostsContainer />
    <GraphQlAndApolloExample />
  </div>
);

export default App;
