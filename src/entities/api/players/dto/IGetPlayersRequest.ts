export interface IGetPlayersRequest {
    name?: string;
    teamIds?: number[];
    page: number;
    pageSize: number;
}