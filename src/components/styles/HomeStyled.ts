import { styled } from 'styled-components';

export const Divcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const DivcontainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid black;
    margin: 1rem 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: .5s;
    padding: 0.5rem;
    border-radius: 4px;
    &:hover {
      color: #EDBF22;
      border-bottom: 1px solid;
      background-color: #E8E8E8;
      border-radius: 4px;
    }
  }
  @media screen and (max-width: 512px) {
    & button {
      margin: .2rem;
      font-size: .8rem;
    }
  }
`