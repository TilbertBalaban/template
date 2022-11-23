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
      <Link to={paths.ScrollAnimation}>ScrollAnimation</Link>
      <Link to={paths.RtkCreateApi}>RtkCreateApi</Link>
      <Link to={paths.RtkCreateAsyncThunk}>RtkCreateAsyncThunk</Link>
      <Link to={paths.RtkCreateApiPost}>RtkCreateApiPost</Link>
      <Link to={paths.GraphQLAndApollo}>GraphQLAndApollo</Link>
      <Link to={paths.ReactQuery}>ReactQuery</Link>
      <Link to={paths.Formik}>Formik</Link>
    </nav>
  );
};

export { HeaderContainer };
