global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;
import { connect, closeDatabase, clearDatabase } from './db.dev';
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

beforeAll(async () => {
  await connect();
});

// afterEach(async () => {
//   await clearDatabase();
// });

afterAll(async () => {
  await clearDatabase();
  await closeDatabase();
});

// ... your tests here

describe('Login', () => {
  it('renders a heading', () => {
    render(<RegisterPage />);

    const heading = screen.getByRole('heading', {
      name: /Create an account/i,
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
