import { toast } from "react-toastify";
import { LinkPage } from "./types/User";

export type AddNewPageRequest = {
  username: string,
  linkpage: LinkPage;
};

export const http = {
  addNewPage: async ({ username, linkpage }: AddNewPageRequest) => {
    try {
      const response = await fetch('/api/linkpage', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ username, linkpage })
      });

      const data = await response.json();
      return { status: response.status, message: data.payload };
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }

  }
};