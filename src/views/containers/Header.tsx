import { Link } from 'react-router-dom';

const HeaderContainer = () => {
  return (
    <div>
      <Link data-testid="link_to_home" to="/">
        home
      </Link>
      <Link data-testid="link_to_test_url" to="/test_url">
        test url
      </Link>
    </div>
  );
};

export { HeaderContainer };
