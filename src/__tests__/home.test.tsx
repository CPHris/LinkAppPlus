import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/pages/index';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
    };
  },
}));

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /all your links in one place/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders a picture (of a smartphone)', () => {
    render(<Home />);
    const img = screen.getByRole('img', {
      name: /a picture of a smartphone/i,
    });
    expect(img).toBeInTheDocument();
  });
});
