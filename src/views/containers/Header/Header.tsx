import { Link } from 'react-router-dom';
import { paths } from 'utils/paths';

import './header.scss';

const HeaderContainer = () => {
  return (
    <nav>
      <Link data-testid="link_to_home" to={paths.Homepage}>
        Homepage
      </Link>
      <Link data-testid="link_to_spying_frog" to={paths.SpyingFrog}>
        SpyingFrog
      </Link>
      <Link data-testid="link_to_spying_frog" to={paths.RtkCreateApi}>
        RtkCreateApi
      </Link>
      <Link data-testid="link_to_spying_frog" to={paths.RtkCreateAsyncThunk}>
        RtkCreateAsyncThunk
      </Link>
      <Link data-testid="link_to_spying_frog" to={paths.RtkCreateApiPost}>
        RtkCreateApiPost
      </Link>
      <Link data-testid="link_to_spying_frog" to={paths.GraphQLAndApollo}>
        GraphQLAndApollo
      </Link>
    </nav>
  );
};

export { HeaderContainer };
