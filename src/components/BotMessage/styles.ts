import { styled } from "styled-components";

const Container = styled.div`
  max-width: 90%;

  @media (min-width: 768px) {
    max-width: 70%;
  }

  @media (min-width: 1200px) {
    max-width: 60%;
  }

  strong {
    font-weight: 600;
  }

  a {
    display: inline-block;
    p {
      color: #0b9ed2;
    }
  }

  p {
    width: fit-content;
    background-color: #fff;
    padding: 24px;
    margin: 16px 0;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
    color: #1e1e1e;
    font-size: 14px;

    display: grid;
    grid-template-columns: 40px calc(100% - 40px);
    align-items: center;

    svg {
      margin-right: 4px;
      margin-bottom: 4px;
      width: 24px;
      height: 24px;
      line-height: 0;
    }
  }

  &.message-content--button,
  &.message-content--options {
    .options-container {
      display: flex;
      flex-direction: column;
      width: fit-content;
      gap: 8px;
    }

    button {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background: #1e1e1e;
      padding: 8px 12px;
      outline: none;
      border: none;
      color: #fff;
      font-size: 12px;
      font-weight: 300;
      box-shadow: 0 0 0 2px #f0f0f0, 0 0 4px 2px rgba(0, 0, 0, 0.3);
      cursor: pointer;

      &:active {
        outline: none;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:hover {
        filter: brightness(1.3);
      }
    }
  }
`;

export default Container;
