import { IEssential } from "./essential.d";

export interface ITrick {
  position: 'r' | 'n' | 's' | 'f';
  rotation: 180 | 360 | 540 | 720;
  direction: 'fs' | 'bs';
  essential: string | IEssential;
  difficulty?: number;
  tags?: string[];
  twisted?: boolean;
  aka?: {
    name: string;
    placement: string;
  };
}
