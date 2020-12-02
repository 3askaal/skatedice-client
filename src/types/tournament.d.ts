import { Match } from './match.d';

export interface Tournament {
  name: string;
  word: string;
  players: User[];
  matches: Match[][];
  done: boolean;
  winner: User;
}
