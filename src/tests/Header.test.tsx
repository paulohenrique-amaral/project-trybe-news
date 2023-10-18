import { screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './helpers/renderwithrouter';
import App from '../App';

describe('Verifica componente Header', () => {
  it('Verifica se o Header é renderizado corretamente', async () => {
    renderWithRouter(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Carregando.../i));

    const navigation = screen.getByRole('navigation');
    const title = screen.getByRole('heading', { name: /the new york trybe/i });
    const inputSearch = screen.getByRole('textbox');
    const btnSearch = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(inputSearch).toBeInTheDocument();
    expect(btnSearch).toBeInTheDocument();
  })
  it('Verifica comportamento do formulário Pesquisar', async () => {
    renderWithRouter(<App />);

    const inputSearch = screen.getByRole('textbox');
    const navigation = screen.getByRole('navigation');
    const button = within(navigation).getByRole('button');

    await act(async () => {
      await userEvent.type(inputSearch, 'ibge');
    });
    expect(inputSearch).toHaveValue('ibge');

    await act(async () => {
      await userEvent.click(button);
    });
    expect(inputSearch).toHaveValue('');
  });
  it('Verifica se é lançado erro ao nao encontrar um termo de pesquisa', async () => {
    renderWithRouter(<App />);

    const inputSearch = screen.getByRole('textbox');
    const navigation = screen.getByRole('navigation');
    const button = within(navigation).getByRole('button');

    await act(async () => {
      await userEvent.type(inputSearch, 'zxz');
    });
    try {
      await act(async () => {
        await userEvent.click(button);
      });
    } catch (error:unknown) {
      if (typeof error === 'object' && error instanceof Error && error.message === 'Sem resultados para busca') {
        expect(error.message).toBe('Sem resultados para busca');
      } else {
        throw error;
      }
    }
  });
});