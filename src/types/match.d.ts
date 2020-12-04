import { Tournament } from "./tournament.d";

export interface Turn {
  player: User;
  trick: Trick;
  good: User[];
  fail: User[];
}

export interface Player {
  player: User;
  letters: number;
}

export interface Match {
  word: string;
  players: Player[];
  turns: Turn[];
  current: User;
  ref?: User;
  winner?: User;
  done?: boolean;
  tournament?: Tournament;
}
