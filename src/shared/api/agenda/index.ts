import { PostData } from '@/shared/api/agenda/types/types';
import { rootApi } from '@/shared/api/rootApi';

const END_POINTS = {
  AGENDA: '/page',
};

export const agendaApi = rootApi.injectEndpoints({
  endpoints: build => ({
    fetchPosts: build.query({
      providesTags: ['Agenda'],
      query: (body: PostData) => ({
        url: END_POINTS.AGENDA,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useFetchPostsQuery } = agendaApi;
