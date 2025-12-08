import styled from "styled-components";

export const VisMonStyle = styled.section`
  width: 100%;
  position: relative;
  padding: 80px 0px;
  font-family: "Work Sans", sans-serif;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .head {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .heading {
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
  }
  .para {
    max-width: 900px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    text-align: center;
    color: rgb(86, 102, 131);
  }

  .vision-mission-box {
    display: flex;
    gap: 2rem;
    max-width: 1280px;
    width: 95%;
    margin: 0px auto;
  }

  .vision-box,
  .mission-box {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  .vision-heading {
    color: rgb(243, 176, 79);
    border-left: 4px solid rgb(243, 176, 79);
    padding-left: 0.5rem;
  }
  .text {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    color: rgb(86, 102, 131);
  }

  .divider {
    width: 0.5rem;
    background-color: rgb(221, 221, 221);
  }

  .mission-heading {
    color: rgb(0, 189, 235);
    border-left: 4px solid rgb(0, 189, 235);
    padding-left: 0.5rem;
  }

  @media (max-width: 768px) {
    .vision-mission-box {
      flex-direction: column;
    }
    .divider {
      height: 0.2rem;
      width: 100%;
    }

    .para {
      text-align: left;
    }
  }
`;
