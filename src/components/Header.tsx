import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { BiSearchAlt2 } from 'react-icons/bi';
import { GiNewspaper } from 'react-icons/gi';
import { NavStyled } from './styles/HeaderStyled';

function Header() {
  const [search, setSearch] = useState('');
  const location = useLocation();

  const { fetchApi } = useContext(UserContext);

  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchApi(`http://servicodados.ibge.gov.br/api/v3/noticias/?busca=${search}`);
    setSearch('');
  };
  return(
    <header>
      <NavStyled>
        <div>
          <h2>
            <GiNewspaper/> The New York Trybe
          </h2>
        </div>
        { location.pathname !== '/favorite' && (
          <form
            onSubmit={ handlesubmit }
          >
            <input
              type="text"
              placeholder="Pesquisar"
              value={ search }
              onChange={ (event) => setSearch(event.target.value) }
            />
            <button
              type="submit"
            >
              <BiSearchAlt2 />
            </button>
          </form>
        ) }
      </NavStyled>      
    </header>
  );
}

export default Header;
