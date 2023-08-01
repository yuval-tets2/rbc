import { User } from "../user/User";

export type Event = {
  createdAt: Date;
  date: Date | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
