import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../testUtils';
import testUser from './testUser.json';

import UserPage from '@/pages/user/[username]/index';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
    };
  },
}));

describe('UserPage', () => {
  it('renders the links heading', () => {
    renderWithProviders(<UserPage user={testUser} />);
    const heading = screen.getByRole('heading', {
      name: /my link pages/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the add new page button', () => {
    renderWithProviders(<UserPage user={testUser} />);
    const button = screen.getByRole('button', {
      name: /add new page/i,
    });
    expect(button).toBeInTheDocument();
  });
});
