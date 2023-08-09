import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RegisterPage from '@/pages/login/index';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('Login', () => {
  it('renders a heading', () => {
    render(<RegisterPage />);

    const heading = screen.getByRole('heading', {
      name: /Login/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders the login button', () => {
    render(<RegisterPage />);

    const loginButton = screen.getByRole('button', {
      name: /login/i,
    });

    expect(loginButton).toBeInTheDocument();
  });
});
