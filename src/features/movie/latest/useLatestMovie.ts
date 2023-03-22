import { useQuery } from "react-query";
import { latestApi } from "../../../apis/movieApi";
import { AxiosError, AxiosResponse } from "axios";
import { MovieDetail } from "../../../types";

const useLatesMovie = () => {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>('latestMovie', latestApi);
}

export default useLatesMovie;