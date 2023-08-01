import { Event } from "../event/Event";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
