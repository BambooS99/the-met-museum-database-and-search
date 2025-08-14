import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  SearchResponse,
  MuseumObject,
  DepartmentsResponse,
} from "../types";

export const metMuseumApi = createApi({
  reducerPath: "metMuseumApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://collectionapi.metmuseum.org/public/collection/v1/",
  }),
  tagTypes: ["Object", "Search"],
  endpoints: (builder) => ({
    // Get all departments
    getDepartments: builder.query<DepartmentsResponse, void>({
      query: () => "departments",
    }),

    // Search objects
    searchObjects: builder.query<
      SearchResponse,
      {
        q?: string;
        isHighlight?: boolean;
        title?: boolean;
        tags?: boolean;
        departmentId?: number;
        isOnView?: boolean;
        artistOrCulture?: boolean;
        medium?: string;
        hasImages?: boolean;
        geoLocation?: string;
        dateBegin?: number;
        dateEnd?: number;
      }
    >({
      query: (params) => {
        const searchParams = new URLSearchParams();

        if (params.q) searchParams.append("q", params.q);
        if (params.isHighlight) searchParams.append("isHighlight", "true");
        if (params.title) searchParams.append("title", "true");
        if (params.tags) searchParams.append("tags", "true");
        if (params.departmentId)
          searchParams.append("departmentId", params.departmentId.toString());
        if (params.isOnView) searchParams.append("isOnView", "true");
        if (params.artistOrCulture)
          searchParams.append("artistOrCulture", "true");
        if (params.medium) searchParams.append("medium", params.medium);
        if (params.hasImages) searchParams.append("hasImages", "true");
        if (params.geoLocation)
          searchParams.append("geoLocation", params.geoLocation);
        if (params.dateBegin)
          searchParams.append("dateBegin", params.dateBegin.toString());
        if (params.dateEnd)
          searchParams.append("dateEnd", params.dateEnd.toString());

        return `search?${searchParams.toString()}`;
      },
      providesTags: ["Search"],
    }),

    // Get object details
    getObject: builder.query<MuseumObject, number>({
      query: (objectId) => `objects/${objectId}`,
      providesTags: (_result, _error, objectId) => [
        { type: "Object", id: objectId },
      ],
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useSearchObjectsQuery,
  useGetObjectQuery,
} = metMuseumApi;
