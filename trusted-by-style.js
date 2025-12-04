import styled from "styled-components";

export const TrustedByStyle = styled.section`
  width: 100%;
  padding: 60px 0;

  .container {
    max-width: 1600px;
    margin: auto;
    text-align: center;
  }

  .title {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 40px;
    font-family: "Work Sans", sans-serif;
  }

  .stats {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .card {
    width: 260px;
    height: 220px;
    background: #fff;
    border-radius: 20px;
    padding-top: 50px;
    position: relative;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    font-family: "Work Sans", sans-serif;
    transition: 0.3s ease;
  }

  .icon {
    width: 70px;
    height: 70px;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
  }

  .teal { border-bottom: 10px solid #00c8c8; }
  .teal .icon { border: 5px solid #00c8c8; color: #00c8c8; }

  .blue { border-bottom: 10px solid #00a6ff; }
  .blue .icon { border: 5px solid #00a6ff; color: #00a6ff; }

  .yellow { border-bottom: 10px solid #f7b343; }
  .yellow .icon { border: 5px solid #f7b343; color: #f7b343; }

  .red { border-bottom: 10px solid #ff3b47; }
  .red .icon { border: 5px solid #ff3b47; color: #ff3b47; }

  .card h2 {
    margin-top: 20px;
    font-size: 32px;
    font-weight: 700;
  }

  .card p {
    margin-top: 5px;
    font-size: 16px;
    color: #444;
  }

  .card span {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: #777;
  }
`;
