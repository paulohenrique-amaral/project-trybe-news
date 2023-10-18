import { styled } from 'styled-components';

export const DivContainer = styled.div`
  background-color: #f5f6fa;
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  margin: 1rem;
  border: 1px solid lightgray;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  max-width: 1200px;
  margin: o auto;
  gap: 3rem;
  & div {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 5px;
    background-color: white;
    border: 1px solid lightgray;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
    &:hover {
      box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);
    }
  }
  & img {
    max-width: 100%;
    border-radius: 5px;
  }
  & img, p, h3 {
    margin-bottom: 1rem;
  }
  & a {
    background-color: #EFC026;
    border: 2px solid #EFC026;
    border-radius: 4px;
    color: #000;
    padding: 0.8rem 0.8rem;
    align-items: center;
    transition: 0.4s;
    text-align: center;
    font-size: 1.3rem;
  }
  & a:hover {
    background-color: #E8E8E8;
    border: 2px solid #EFC026;
  }
  @media screen and (max-width: 512px) {
    flex-direction: column;
    max-width: 100%;
    padding: 0.8rem;
    gap: 1rem;    
    & div {
    width: 100%;
    }
  }  
`
export const SecFavorite = styled.section`
  border-bottom: 1px solid black;
  text-align: end;
  margin-bottom: 1rem;
  & button {
    border: none;
    background-color: transparent;
    color: #EFC026;
    font-size: 1.4rem;
  }
`
