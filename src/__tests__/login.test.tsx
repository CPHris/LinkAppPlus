import { render, screen, fireEvent } from '@testing-library/react';
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

  test('username input should accept text', () => {
    render(<RegisterPage />);
    const userNameInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(userNameInput.value).toMatch('');
    fireEvent.change(userNameInput, { target: { value: 'testing' } });
    expect(userNameInput.value).toMatch('testing');
  });

  test('password input should accept text', () => {
    render(<RegisterPage />);
    const passwordInput = screen.getByPlaceholderText(
      /password/i,
    ) as HTMLInputElement;
    expect(passwordInput.value).toMatch('');
    fireEvent.change(passwordInput, { target: { value: 'testing' } });
    expect(passwordInput.value).toMatch('testing');
  });
});
