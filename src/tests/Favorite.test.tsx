import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderwithrouter';
import { dataMocks } from './mocks/dataMock';
import App from '../App';

describe('Verifica componente Home', () => {
  it('Verifica se o Favoritos é renderizado corretamente', async () => {
    localStorage.setItem('favorites', JSON.stringify(dataMocks));    
    const { container } = renderWithRouter(<App />, {route: '/favorite'});

    const cards = container.querySelectorAll('#cards');    
    expect(cards.length).toBe(dataMocks.length);

    const btnFavorite = container.querySelector('#btn-favorite > svg > path');
    expect(btnFavorite).toBeInTheDocument();

    if (btnFavorite) {
      await userEvent.click(btnFavorite);
    }
    const favoritesData = localStorage.getItem('favorites');
      if (favoritesData) {
        expect(JSON.parse(favoritesData).length).toBe(2);
      }        
  });
});