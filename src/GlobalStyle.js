import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Tilt Prism', cursive;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.7),
      rgba(47, 48, 58, 0.7)
    ),
    url(https://ikitb.knukim.edu.ua/images/Noviny/2018/25.12.2018/6.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  
}

code {
  font-family: 'Tilt Prism', cursive;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
