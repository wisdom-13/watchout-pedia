import { useQuery } from "react-query";
import { topRatedApi } from "../../../apis/tvApi";
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('topRateTv', topRatedApi);
}

export default useTopRateMovie;