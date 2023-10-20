import { styled } from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #1D1F26;
  color: #ffffff;
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 3rem;
  padding: 0.5rem 0 0 0;
  font-size: 0.8rem;
  & div:first-child {
    width: 50%;
    margin-left: 2rem;
  }
  & div:nth-child(2) {
    display: flex;
    width: 50%;
    margin-right: 2rem;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    & a:hover {
      @keyframes jello-vertical {
        0% {
          transform: scale3d(1, 1, 1);
        }
        30% {
          transform: scale3d(0.75, 1.25, 1);
        }
        40% {
          transform: scale3d(1.25, 0.75, 1);
        }
        50% {
          transform: scale3d(0.85, 1.15, 1);
        }
        65% {
          transform: scale3d(1.05, 0.95, 1);
        }
        75% {
          transform: scale3d(0.95, 1.05, 1);
        }
        100% {
          transform: scale3d(1, 1, 1);
        }
      }
      cursor: pointer;
      animation: jello-vertical 1s ease-in-out infinite;
    }
  }
`