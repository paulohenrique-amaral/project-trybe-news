import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { NewsItems } from '../type';
import { DivContainer, SecFavorite } from './styles/CardNewsStyled';

function CardNews() {
  const location = useLocation();
  const [favorites, setFavorites] = useState<NewsItems[]>([]);
  const [currentPage, setCurrentPage] = useState(9);
  const { news } = useContext(UserContext);
  const newsResult = location.pathname === '/favorite' ? favorites : news;

  useEffect(() => {
    const favoritesData = localStorage.getItem('favorites');
      if (favoritesData) {
        setFavorites(JSON.parse(favoritesData));
      }
  }, [location.pathname]);

  useEffect(() => {
    const intersectionsObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 9);        
      }
    });
    const sentinela = document.querySelector('#sentinela');
    if (sentinela) {
      intersectionsObserver.observe(sentinela);
    }
    return () => intersectionsObserver.disconnect();
  }, []);

  const handleFavoriteClick = (id: string) => {
  const isFavorite = favorites.some((favorite) => favorite.id === id);
  if (isFavorite) {
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } else {
      const newsItem = news.find((item) => item.id === id);
      if (newsItem) {
        const updatedFavorites = [...favorites, newsItem];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
      }
    }
  };
  return(
    <DivContainer>
      { newsResult.slice(0, currentPage).map((item: NewsItems) => {  
        const urlImagemIntro = JSON.parse(item.imagens).image_intro;

        const dataAtual = new Date();

        const dataSplit = item.data_publicacao.split('/');
        const day = parseInt(dataSplit[0]);
        const month = parseInt(dataSplit[1]);
        const year = dataSplit[2].split(' ');
        const yearNumeric = parseInt(year[0], 10);

        const dataPublicacao = new Date(yearNumeric, month - 1, day);
        const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
        const diferencaEmMilissegundos = Math.abs(dataAtual.getTime() - dataPublicacao.getTime());
        const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / umDiaEmMilissegundos);

        const isFavorite = favorites.some((objeto) => objeto.id === item.id);
        return (
          <div
            id='cards'
            key={item.id}
          >
            <h3
              id='card-title'
            >
              {item.titulo}
            </h3>
            <img
              id='card-img'
              src={`https://agenciadenoticias.ibge.gov.br/${urlImagemIntro}`}
              alt="Imagem-News"
            />
            <p
              id='card-introducao'
            >
              {item.introducao}
            </p>
            <p
              id='days-public'
            >
              {diferencaEmDias === 0
                ? "Publicada hoje"
                : diferencaEmDias === 1
                ? `Publicada há 1 dia`
                : `Publicada há ${diferencaEmDias} dias`}
            </p>
            <SecFavorite>
              <button
                id='btn-favorite'
                onClick={ () => handleFavoriteClick(item.id) }
              >
                { isFavorite ? <AiFillHeart/> : <AiOutlineHeart/> }
              </button>
            </SecFavorite>  
            <a
              id='link-news'
              href={ item.link }
              target="_blank"
            >
             Leia a Noticia Completa
            </a>
          </div>
          );
        }) }
        <section id="sentinela"></section>
    </DivContainer>    
  );
}

export default CardNews;
