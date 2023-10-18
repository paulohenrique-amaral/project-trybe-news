import { useState } from 'react';
import { NewsItems } from '../type';

function useFetchApi() {
  const [dataApi, setDataApi] = useState<NewsItems[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApi = async (url: string) => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    if (data.items.length === 0) {
      setIsLoading(false);
      alert('Sem resultados para busca');
      throw new Error('Sem resultados para busca');
    }
    setIsLoading(false);
    setDataApi(data.items);
  };

  return { dataApi, isLoading, fetchApi };
}

export default useFetchApi;
