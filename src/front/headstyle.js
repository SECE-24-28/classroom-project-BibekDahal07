import styled from "styled-components";

export const HeadStyle = styled.div`
  width: 100%;
  position: relative;
  padding: 80px 0px;
  font-family: "Work Sans", sans-serif;

  .head-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px auto;
    gap: 2rem;
    position: relative;
  }

  .heading {
    display: inline-block;
    font-family: Arial, sans-serif;
  }

  .head {
    font-family: "Work Sans", sans-serif;
    font-weight: 700;
    font-size: 64px;
    color: rgb(252, 41, 71);
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .sub-title {
    display: flex;
    font-family: "Work Sans", sans-serif;
    flex-direction: column;
  }

  .sub-heading {
    font-family: "Work Sans", sans-serif;
    font-size: 28ps;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 40px;
  }

  .red-sub-heading {
    color: rgb(252, 41, 71);
    font-style: italic;
    font-size: 28px;
    text-align: center;
  }

  .para {
    max-width: 900px;
    font-family: "Work Sans", sans-serif;
    font-size: 20px;
    color: rgb(86, 102, 131);
    text-align: center;
    line-height: 1.6;
    margin: 0px;
    padding: 0px;
  }

  .button-box {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .button-box {
      flex-direction: column;
    }
    .para {
      text-align: left;
    }
  }

  .start-button {
    color: rgb(9, 9, 9);
    padding: 12px 16px;
    width: 100%;
    font-size: 18px;
    border-radius: 6px;
    background: rgb(232, 232, 232);
    border: 1px solid rgb(232, 232, 232);
    transition: 0.3s;
    white-space: nowrap;
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    text-decoration: none;
  }

  .join-button {
    padding: 12px 16px;
    width: 100%;
    font-size: 18px;
    border-radius: 6px;
    transition: 0.3s;
    white-space: nowrap;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background: rgb(252, 41, 71);
    border: 1px solid rgb(252, 41, 71);
  }
`;
