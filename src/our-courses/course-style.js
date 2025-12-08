import styled from "styled-components";

export const CourseStyle = styled.div`
  width: 100%;
  padding: 80px 0;
  font-family: "Work Sans", sans-serif;

  .course {
    width: 100%;
  }

  .container {
    max-width: 1280px;
    margin: 0px auto;
    display: flex;
    gap: 3rem;
    padding-top: 3rem;
    flex-direction: column;
  }

  .head {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    align-items: center;
  }

  .title {
    font-size: 48px;
    font-weight: 600;
  }

  .para {
    font-size: 18px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: rgb(86, 102, 131);
    max-width: 700px;
    margin-block: 8px;
  }

  .body {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: start;
    gap: 1rem;
    left-margin: 5px;
  }

  .item1,
  .item2,
  .item3 {
    border: 1px solid rgb(221, 221, 221);
    padding: 0.5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    gap: 0.8rem;
    position: relative;
  }

  .image {
    width: 100%;
    height: 200px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .star {
    color: rgb(255, 188, 11);
    font-size: 28px;
  }


  h2 {
    font-size: 1.125rem;
    font-weight: 600;
    display: inline-block;
    width: 100%;
    margin: 0px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin: 0px;
  }

  .price {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 28px;
  }

  .buttons {
    display: flex;
    gap: 10px;
  }

  .five {
    justify-content: center;
  }

  button {
    flex: 1;
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: "Work Sans", sans-serif;
  }

  .buy {
    background-color: rgb(252, 41, 71);
    color: white;
    border: 1px solid rgb(252, 41, 71);

    &:hover {
      background-color: #e63a60;
    }
  }

  .more {
    background-color: #f5f5f5;
    color: rgb(9, 9, 9);
    border: 1px solid #e0e0e0;

    &:hover {
      background-color: #e8e8e8;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 36px;
    }

    .para {
      font-size: 16px;
    }

    .body {
      grid-template-columns: 1fr;
    }
  }
`;
