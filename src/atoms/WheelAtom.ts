import { atom } from "jotai";

export const ListArrayAtom = atom<string[]>([
  "Ali",
  "Beatriz",
  "Charles",
  "Diya",
  "Eric",
  "Fatima",
  "Gabriel",
  "Hanna",
]);

export const WinnersArrayAtom = atom<string[]>([]);

export const IsSpinningAtom = atom<boolean>(false);

export const IsWinnerModalOpenAtom = atom<boolean>(false);
