import { atom, atomFamily } from "recoil";

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

export const modalStateFamily = atomFamily<{ isOpened: boolean }, string>({
  key: "modalStateFamily",
  default: (id) => ({
    id,
    isOpened: false,
  }),
});
