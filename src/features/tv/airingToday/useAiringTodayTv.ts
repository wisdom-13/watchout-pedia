import { useQuery } from "react-query";
import { airingTodayApi } from "../../../apis/tvApi";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('airingTv', airingTodayApi);
}

export default useTopRateMovie;