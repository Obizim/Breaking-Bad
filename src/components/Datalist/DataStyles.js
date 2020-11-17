import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 5rem 10rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem 5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 3rem 0.8rem;
  }

  .characterList {
    border-radius: 3px;
    box-shadow: 0 5px 7px rgba(114, 114, 114, 0.1);

    img {
      width: 100%;
      height: 400px;
      border-radius: 4px;
    }
    .texts {
      padding: 1.5rem;
      color: #494949;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;

  .image {
    width: 20%;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 70%;
    }
  }

  .title {
    color: grey;
    font-size: 18px;
    text-align: center;
  }
`;
