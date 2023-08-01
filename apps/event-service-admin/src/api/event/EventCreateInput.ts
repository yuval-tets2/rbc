import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventCreateInput = {
  date?: Date | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
