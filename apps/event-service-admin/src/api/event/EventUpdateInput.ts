import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventUpdateInput = {
  date?: Date | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
