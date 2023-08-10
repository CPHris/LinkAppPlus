import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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
    render(<ProfilePage />);
    const heading = screen.getByRole('heading', {
      name: /Profile Page/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
