import { atom } from "recoil";

export const darkModeState = atom({
  key: "darkModeState",
  default: true,
});

export const gnbState = atom({
  key: "gnbState",
  default: false,
});

export const introduceTitleState = atom({
  key: "introduceTitleState",
  default: false,
});
