export interface IPlayer {
    id: number;
    name: string;
    number: number;
    position: string;
    team: number;
    birthday: string | Date;
    height: number;
    weight: number;
    avatarUrl: string | null;
}