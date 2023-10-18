import { styled } from 'styled-components';

export const Divcontainer = styled.div`
  display: flex;
  align-items: center;
  & a {
    display: flex;
    padding: 0.5rem;
    margin-left: 2rem;
    font-size: 1.5rem;
    gap: 0.5rem;
  }
  @media screen and (max-width: 512px) {
    justify-content: center;
    align-items: center;
    & a {
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  }
`
export const DivCardnews = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
