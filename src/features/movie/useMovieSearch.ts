import { AxiosResponse } from "axios";
import { useQuery } from "react-query"
import { searchApi } from "../../apis/movieApi"
import { ListResponse, MovieDetail } from "../../types";

const useMovieSearch = (query: string) => {
  const result = useQuery<AxiosResponse<ListResponse<MovieDetail>>>(['searchMovie', query], () => searchApi(query), { enabled: Boolean(query) });
  return result;
}

export default useMovieSearch;