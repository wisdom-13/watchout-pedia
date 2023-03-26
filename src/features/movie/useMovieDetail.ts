import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { detailApi } from '../../apis/movieApi';
import { MovieDetail } from '../../types';

const useMovieDetail = (id: string) => {
  const queryFn = () => detailApi(id);
  const { isLoading, isError, data } = useQuery<AxiosResponse<MovieDetail>, AxiosError>(['movieDetail', id], queryFn, { enabled: Boolean(id) });

  return {
    isLoading,
    isError,
    data
  }
}

export default useMovieDetail;