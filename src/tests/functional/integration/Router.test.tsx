// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../../../App';
import { renderWithProviders } from '../../utils';

describe('TEST APP', () => {
  test('Router test', () => {
    renderWithProviders(<App />);
    // const homeLink = screen.getByTestId('link_to_home');
    // const testUrlLink = screen.getByTestId('link_to_test_url');
    // userEvent.click(homeLink);
    // expect(screen.getByTestId('home')).toBeInTheDocument();
    // userEvent.click(testUrlLink);
    // expect(screen.getByTestId('test_url')).toBeInTheDocument();
  });

  //   test('Error page test', () => {
  //     render(
  //       <MemoryRouter initialEntries={['/not_existing_route']}>
  //         <App />
  //       </MemoryRouter>,
  //     );
  //     expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  //   });
});
