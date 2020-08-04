import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`

  width: 230px;
  height: 60px; 
  border: 0;
  outline: none;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  font-family: Blender Pro Book, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  color: var(--black);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcee09;
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  

@media (max-width: 800px) {
  font-family: 'Blender Pro Book', sans-serif;
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
}

/* &:hover,
&:focus {
  opacity: .5;
} */
`;
export default Button;
// crases são tag de template string
