import { UserContext } from './UserContext';
import useFetchApi from '../hooks/useFetchApi';
import { UserProviderProps } from '../type';

function UserProvider({ children }: UserProviderProps) {
  const { dataApi, isLoading, fetchApi } = useFetchApi();

  const context = {
    news: dataApi,
    isLoading,
    fetchApi,
  };

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
}

export default UserProvider;
