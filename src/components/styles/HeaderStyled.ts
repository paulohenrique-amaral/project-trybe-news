import { styled } from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1D1F26;
  margin-bottom: 0.5rem;
  & div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
  & form {
    display: flex;
    gap: 0.5rem;
  }
  & input {
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    border: none;
  }
  & h2 {
    color: #ffffff;
    font-family: Audiowide;
    font-size: 2rem;
  }
  & form button {
    background-color: #EFC026;
    border: 2px solid #EFC026;
    border-radius: 4px;
    color: #000;
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .4s;
  }
  & form button:hover {
    background-color: transparent;
    color: #EFC026;
  }
  @media screen and (max-width: 512px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & h2 {
    font-size: 1rem;
  }
  }
`