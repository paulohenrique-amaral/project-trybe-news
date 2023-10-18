import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Loading from '../components/Loading';
import CardNews from '../components/CardNews';
import { Divcontainer, DivcontainerBtn } from '../components/styles/HomeStyled';

function Home() {
  const urlBase = 'http://servicodados.ibge.gov.br/api/v3/noticias';
  const { isLoading, fetchApi } = useContext(UserContext);

  useEffect(() => {
    fetchApi(`${urlBase}/?qtd=200`);
  }, []);

  const handleButtonClick = async (type: string) => {
    if (type !== '') {
      const endpoint = getEndpointForNewsType(type);
      fetchApi(endpoint);
    }    
  };

  const getEndpointForNewsType = (type: string) => {
    switch (type) {
      case 'recentes':
        return `${urlBase}/?qtd=200`;
      case 'release':
        return `${urlBase}/?tipo=release`;
      case 'noticias':
        return `${urlBase}/?tipo=noticia`;
      case 'favorite':
        return `${urlBase}/?qtd=200`;
      default:
        return '';
    }
  };
  if (isLoading) {
    return (
      <Loading />
    )
  }
  return (
    <Divcontainer>
      <DivcontainerBtn>
        <button
          onClick={ () => handleButtonClick('recentes') }
        >
          Mais recentes
        </button>
        <button
          onClick={ () => handleButtonClick('release') }
        >
          Release
        </button>
        <button
          onClick={ () => handleButtonClick('noticias') }
        >
          Notícias
        </button>
        <Link to='/favorite'>
          <button
            onClick={ () => handleButtonClick('favorite') }
          >
            Favoritos
          </button>  
        </Link>
      </DivcontainerBtn>
      <CardNews/>
    </Divcontainer>
  );
}

export default Home;
