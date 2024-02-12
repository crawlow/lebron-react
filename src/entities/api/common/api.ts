import { RootState } from '@entities/redux/store'
import queryString from 'query-string';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_REACT_APP_API,
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.user?.token
		if (token) {
			headers.set('Authorization', `Bearer ${token}`)
		}
		return headers
	},
	paramsSerializer: (params) => queryString.stringify(params, { arrayFormat: 'none' }),
})

const baseQueryWithAuthCheck: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, baseApi, extraOptions) => {
	const result = await baseQuery(args, baseApi, extraOptions)
	return result
}

export const api = createApi({
	baseQuery: baseQueryWithAuthCheck,
	endpoints: () => ({}),
	tagTypes: ['Teams', 'Team', 'Players', 'Player'],
})
