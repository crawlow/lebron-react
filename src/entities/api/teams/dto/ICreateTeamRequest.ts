import { ITeam } from "./ITeam";

export interface ICreateTeamRequest extends Omit<ITeam, 'id'> {}
