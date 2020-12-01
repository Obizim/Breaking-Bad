import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 5rem 13rem;

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
    box-shadow: 0 5px 7px rgba(56, 50, 50, 0.1);

    img {
      width: 100%;
      height: 400px;
      border-radius: 4px;
    }
    .texts {
      padding: 1.5rem;

      h3 {
        color: #6464d8;
        margin: 5px 0;
        font-size: 1.5rem;
      }

      .details {
        margin-top: 20px;
        a {
          background: #6464d8;
          color: white;
          padding: 7px 5px;
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .image {
    width: 20%;
    border-radius: 10px;
    margin: 20px;

    @media (max-width: 768px) {
      width: 70%;
    }
  }

  .texts {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h2 {
      color: #6464d8;
    }
  }

  .title {
    color: grey;
    font-size: 18px;
    margin: 5px;
  }
`;

export const Search = styled.section`
  margin-top: 1rem;
  padding-bottom: 0;

  .search-form {
    width: 85vw;
    margin: 0 auto;
    max-width: 40rem;
    padding: 2rem 2.5rem;
    text-transform: capitalize;
  }

  .form-control label {
    display: block;
    margin-bottom: 1.25rem;
    font-weight: bold;
    color: #6464d8;
  }
  .form-control input {
    width: 100%;
    border: 1px solid black;
    border-radius: 2px;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
`;
