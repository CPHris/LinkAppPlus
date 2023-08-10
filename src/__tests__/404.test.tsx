import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorPage from '@/pages/404';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
    };
  },
}));

describe('404 error page', () => {
  it('renders a funky chicken', () => {
    render(<ErrorPage />);
    const img = screen.getByRole('img', {
      name: /funky chicken/i,
    });
    expect(img).toBeInTheDocument();
  });
});
