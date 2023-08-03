import { toast } from 'react-toastify';
import { LinkPage } from './types/User';

export type AddNewPageRequest = {
  username: string;
  linkpage: LinkPage;
};

export type DeletePageRequest = {
  username: string;
  pageid: string;
};

export type EditLinkPageRequest = {
  username: string;
  linkpage: LinkPage;
  linkpageid: string;
};

export const http = {
  addNewPage: async ({ username, linkpage }: AddNewPageRequest) => {
    try {
      const response = await fetch('/api/linkpage', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ username, linkpage }),
      });

      const data = await response.json();
      return { status: response.status, message: data.payload };
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  },
  deletePage: async ({ username, pageid }: DeletePageRequest) => {
    try {
      const response = await fetch('/api/linkpage', {
        headers: { 'Content-type': 'application/json' },
        method: 'DELETE',
        body: JSON.stringify({ username, pageid }),
      });
      const data = await response.json();
      return { status: response.status, message: data.payload };
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  },
  editPage: async ({ username, linkpage, linkpageid }: EditLinkPageRequest) => {
    try {
      const response = await fetch('/api/linkpage', {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify({
          username,
          linkpage,
          linkpageid,
        }),
      });
      const data = await response.json();
      return { status: response.status, message: data.payload };
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  },
  login: async (username: string) => {
    try {
      const response = await fetch('/api/login', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      return { status: response.status, message: data.message };
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  },
  register: async (username: string, email: string) => {
    try {
      const response = await fetch('/api/register', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ username, email }),
      });
      const data = await response.json();
      return { status: response.status, message: data.message };
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  },
};
