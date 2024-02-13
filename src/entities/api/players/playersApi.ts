import { api } from "../common/api";
import { IPaginatedResponse } from "../common/dto/IPaginatedResponse";
import { ICreatePlayer } from "./dto/ICreatePlayerRequest";
import { IDeletePlayerRequest } from "./dto/IDeletePlayerRequest";
import { IGetPlayerRequest } from "./dto/IGetPlayerRequest";
import { IGetPlayersRequest } from "./dto/IGetPlayersRequest";
import { IPlayer } from "./dto/IPlayer";
import { IUpdatePlayerRequest } from "./dto/IUpdatePlayerRequest";

export const playerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlayers: builder.query<IPaginatedResponse<IPlayer>, IGetPlayersRequest>({
      query: (payload) => ({
        url: "Player/GetPlayers",
        method: "GET",
        params: {
          Name: payload.name ?? '',
          TeamIds: payload.teamIds ?? [],
          Page: payload.page,
          PageSize: payload.pageSize,
        },
      }),
      providesTags: ["Players"],
    }),
    getPlayer: builder.query<IPlayer, IGetPlayerRequest>({
      query: (payload) => ({
        url: "Player/Get",
        method: "GET",
        params: {
          id: payload.id,
        },
      }),
      providesTags: (_result, _error, arg) => [{ type: "Player", id: arg.id }],
    }),
    getPositions: builder.query<string[], void>({
        query: () => ({
            url: 'Player/GetPositions',
            method: 'GET',
        }),
    }),
    createPlayer: builder.mutation<IPlayer, ICreatePlayer>({
      query: (payload) => ({
        url: "Player/Add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Player"],
    }),
    updatePlayer: builder.mutation<IPlayer, IUpdatePlayerRequest>({
      query: (payload) => ({
        url: "Player/Update",
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "Player", id: arg.id },
        "Player",
      ],
    }),
    deletePlayer: builder.mutation<IPlayer, IDeletePlayerRequest>({
      query: (payload) => ({
        url: "Player/Delete",
        method: "DELETE",
        body: payload,
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "Player", id: arg.id },
        "Player",
      ],
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetPlayerQuery,
  useGetPositionsQuery,
  useCreatePlayerMutation,
  useDeletePlayerMutation,
  useUpdatePlayerMutation,
} = playerApi;
