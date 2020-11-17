import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 3rem 10rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 3rem 5rem;
  }

  @media (max-width: 768px) {
      display:flex;
      flex-direction:column;
      padding: 3rem .8rem;
  }

    .characterList {
      border-radius: 3px;
      box-shadow: 0 3px 5px rgba(114, 114, 114, 0.1);

      img {
        width: 100%;
        height: 400px;
      }
      .texts {
        padding: 1.5rem;

 
      }
    }
`;
