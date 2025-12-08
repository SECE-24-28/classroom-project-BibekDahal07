import styled from "styled-components";

export const ContactUsStyle = styled.div`
  margin: 0px;
  width: 100%;
  padding: 0px;
  .get-in-touch {
    background-color: rgba(252, 41, 71, 0.875);
    position: relative;
    overflow: hidden;
    margin: 0px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    max-width: 1400px;
    width: 95%;
    margin: 0px auto;
    color: white;
    padding: 2rem 0px;
    text-align: center;
    gap: 50px;
  }

  h1 {
    font-family: "Work Sans", sans-serif;
    font-size: 2.75rem;
    margin-bottom: 20px;
  }

  p {
    font-family: "Work Sans", sans-serif;
    font-size: 1rem;
    margin-bottom: 30px;
    max-width: 420px;
  }

  button {
    background-color: white;
    color: rgb(22, 22, 22);
    border: none;
    padding: 10px 20px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.11px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  img {
    width: 300px;
    height: 300px;
    z-index: 100;
    position: relative;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .icon{
  }

  @media screen and (min-width: 1024px) {
    .container {
      flex-direction: row;
      justify-content: space-between;
      gap: 50px;
      text-align: left;
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 4rem;
    }
  }
`;
