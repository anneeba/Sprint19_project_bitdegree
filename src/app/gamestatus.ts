export enum Status {
    STOP = 0,
    START = 1,
}
  import { Status } from './gamestatus';
  
  export class Gamelogic { 
    gameStatus!: Status;
  }