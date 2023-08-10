import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../testUtils';

import ProfilePage from '@/pages/user/[username]/profile/index';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
    };
  },
}));

describe('Profile', () => {
  it('renders a heading', () => {
    renderWithProviders(<ProfilePage />);
    const heading = screen.getByRole('heading', {
      name: /update email/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
