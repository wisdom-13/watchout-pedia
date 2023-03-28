import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { detailApi } from '../../apis/tvApi';
import { TVDetail } from '../../types';

const useTvDetail = (id: string) => {
  const queryFn = () => detailApi(id);
  const { isLoading, isError, data } = useQuery<AxiosResponse<TVDetail>, AxiosError>(['movieDetail', id], queryFn, { enabled: Boolean(id) });

  return {
    isLoading,
    isError,
    data
  }
}

export default useTvDetail;