import styled from "styled-components";

export const CapStyle = styled.div`
  display: flex;
  justify-content: center;

  .capsule {
    background-color: rgb(252, 41, 71);
    border-radius: 200px;
    width: 1400px;
    padding: 2rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
  .capsule{
    border-radius: 10px;
    flex-direction: column;
    gap: 1rem;
    padding-left: 1rem;
  }
}

  .heading {
    color: white;
    font-size: 32px;
    color: white;
    font-weight: 600;
    text-align: center;
  }  

  .text {
    color: white;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  }
`;
