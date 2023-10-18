import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import renderWithRouter from './helpers/renderwithrouter';
import App from '../App';

describe('Verifica componente Home', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch');
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it('Verifica se o Home é renderizado corretamente', async () => {
    renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Carregando.../i));

    const btnRecentes = screen.getByRole('button', {  name: /mais recentes/i});
    const btnRelease = screen.getByRole('button', {  name: /release/i});
    const btnNoticias = screen.getByRole('button', {  name: /notícias/i});
    const btnFavoritos = screen.getByRole('button', {  name: /favoritos/i});

    expect(btnRecentes).toBeInTheDocument();
    expect(btnRelease).toBeInTheDocument();
    expect(btnNoticias).toBeInTheDocument();
    expect(btnFavoritos).toBeInTheDocument();
  });
  it('Verifica se os Cards são renderizado', async () => {
    const { container } = renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Carregando.../i));

    expect(fetch).toHaveBeenCalled();

    const cards = container.querySelector('#cards');
    const cardTitle = container.querySelector('#card-title');
    const cardImg = container.querySelector('#card-img');
    const cardIntroducao = container.querySelector('#card-introducao');
    const cardDaysPublic = container.querySelector('#days-public');
    const cardBtnFavorite = container.querySelector('#btn-favorite > svg > path');
    const cardLinkNews = container.querySelector('#link-news');

    expect(cards).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(cardImg).toBeInTheDocument();
    expect(cardIntroducao).toBeInTheDocument();
    expect(cardDaysPublic).toBeInTheDocument();
    expect(cardBtnFavorite).toBeInTheDocument();
    expect(cardLinkNews).toBeInTheDocument();
  });
  it('Verifica o Botão mais recentes chama o endpoint Correto', async () => {
    renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Carregando.../i));

    const btnRecentes = screen.getByRole('button', { name: /mais recentes/i });
    await userEvent.click(btnRecentes);
    expect(fetch).toHaveBeenCalledWith('http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=200');
  });
  it('Verifica o Botão release chama o endpoint Correto', async () => {
    renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Carregando.../i));

    const btnRelease = screen.getByRole('button', { name: /release/i });
    await userEvent.click(btnRelease);
    expect(fetch).toHaveBeenCalledWith('http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
  });
  it('Verifica o Botão Notícias chama o endpoint Correto', async () => {
    renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Carregando.../i));

    const btnNoticias = screen.getByRole('button', { name: /notícias/i });
    await userEvent.click(btnNoticias);
    expect(fetch).toHaveBeenCalledWith('http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia');
  });
  it('Verifica o Favoritos redireciona para a rota "/favorite"', async () => {
    renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Carregando.../i));

    const btnFavoritos = screen.getByRole('button', {  name: /favoritos/i});
    await userEvent.click(btnFavoritos);
    const linkHome = screen.getByRole('link', {  name: /home/i});
    expect(linkHome).toBeInTheDocument();
  });
  it('Verifica se os Cards são favoritados corretamente', async () => {
    localStorage.setItem('favorites', JSON.stringify([]));
    const { container } = renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Carregando.../i));

    const cardBtnFavorite = container.querySelector('#btn-favorite > svg > path');
    if (cardBtnFavorite) {
      await userEvent.click(cardBtnFavorite);
    }
    const favoritesData = localStorage.getItem('favorites');
      if (favoritesData) {
        expect(JSON.parse(favoritesData).length).toBe(1);
      }
  });
});
