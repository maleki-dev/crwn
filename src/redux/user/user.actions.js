import { currentUserType } from "./user.types";

export const setCurrentUser = (user) => ({
  type: currentUserType.SET_CURRENT_USER,
  payload: user,
});
