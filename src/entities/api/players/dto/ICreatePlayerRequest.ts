import { IPlayer } from "./IPlayer";

export interface ICreatePlayer extends Omit<IPlayer, 'id'> {}