import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 3rem;
  box-shadow: 0 3px 5px rgba(61, 61, 61, 0.1);

  p {
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const Navul = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavLinks = styled.li`
  margin: 15px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #303030;

  @media (max-width: 768px) {
    margin: 10px;
    font-size: 1rem;
  }
`;

export const Loader = styled.div`
  .loader,
  .loader:before,
  .loader:after {
    background: transparent;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  //Loader Css
  .loader {
    color: #6464d8;
    text-indent: -9999em;
    margin: 88px auto;
    margin-top: 20rem;
    position: relative;
    font-size: 3rem;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    content: "";
  }
  .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;

export const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: grey;
  padding: 10rem 5rem;

  @media (max-width: 768px) {
    padding: 5rem 3rem;
  }

  p {
    margin: 7px;
  }
`;
