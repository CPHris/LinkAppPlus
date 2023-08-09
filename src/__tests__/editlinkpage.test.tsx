import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import testUser from './testUser.json';

import EditLinkPage from '@/pages/user/[username]/edit/[linkpageid]/index';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: { linkpageid: '12345' },
      asPath: '',
    };
  },
}));

describe('Edit Link Page', () => {
  it('renders a heading', () => {
    render(<EditLinkPage user={testUser} />);
    const heading = screen.getByRole('heading', {
      name: /linkapp/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the avatar heading', () => {
    render(<EditLinkPage user={testUser} />);
    const heading = screen.getByRole('heading', {
      name: /avatar/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the editor heading', () => {
    render(<EditLinkPage user={testUser} />);
    const heading = screen.getByRole('heading', { name: /name/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the bio heading', () => {
    render(<EditLinkPage user={testUser} />);
    const heading = screen.getByRole('heading', { name: /bio/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the preview link', () => {
    render(<EditLinkPage user={testUser} />);
    const link = screen.getByRole('link', {
      name: /go to page/i,
    });
    expect(link).toBeInTheDocument();
  });
});
