import { atom } from "jotai";

export const NameArrayAtom = atom<string[]>([
  "Ali",
  "Beatriz",
  "Charles",
  "Diya",
  "Eric",
  "Fatima",
  "Gabriel",
  "Hanna",
]);

export const ColorArrayAtom = atom<string[]>([
  "#EE4040",
  "#F0CF50",
  "#815CD1",
  "#3DA5E0",
  "#34A24F",
  "#F9AA1F",
  "#EC3F3F",
  "#FF9000",
]);

export const WinnersArrayAtom = atom<string[]>([]);

export const IsSpinningAtom = atom<boolean>(false);

export const IsWinnerModalOpenAtom = atom<boolean>(false);
