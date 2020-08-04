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

  /* .Button.btn__glitch {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--yellow-color);
  filter: drop-shadow(-2px 3px #67e3f3) drop-shadow(-1px -3px #02d8f3) drop-shadow(2px 1px #02d8f3);


.btn--secondary .btn__glitch {
  background-color: var(--red-color);
}

.btn:hover .btn__glitch,
.btn:hover .btn__content::after,
.btn:focus .btn__glitch,
.btn:focus .btn__content::after {
  display: block;
  animation: glitch-animation 2s linear 0s infinite;
}
/* secret trick */
/*@keyframes glitch-animation {
  0% {
    opacity: 1;
    transform: translateZ(0);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }

  2% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(-5px);
  }

  6% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(5px);
  }

  8% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(-5px);
  }

  9% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(0);
  }

  10% {
    clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
    transform: translate3d(5px, 0, 0);
  }

  13% {
    clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
    transform: translateZ(0);
  }

  13.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  15% {
    clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
    transform: translate3d(5px, 0, 0);
  }

  20% {
    clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
    transform: translate3d(-5px, 0, 0);
  }

  20.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  25% {
    clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
    transform: translate3d(5px, 0, 0);
  }

  30% {
    clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
    transform: translate3d(-5px, 0, 0);
  }

  30.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }

  35% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(-5px);
  }

  40% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(5px);
  }

  45% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(-5px);
  }

  50% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(0);
  }

  55% {
    clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  60% {
    clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
    transform: translateZ(0);
    opacity: 1;
  }

  60.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    opacity: 1;
  }

  to {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    opacity: 1;
  }
}*/
/* 
  &:before, &:after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: .8;
    } &:after {
        color: #f0f;
        z-index: -2;
    } &:before {
        color: #0ff;
        z-index: -1;
    }

    @keyframes Button {
    0% {
        transform: translate(0)
    }
    20% {
        transform: translate(-5px, 5px)
    }
    40% {
        transform: translate(-5px, -5px)
    }
    60% {
        transform: translate(5px, 5px)
    }
    80% {
        transform: translate(5px, -5px)
    }
    to {
        transform: translate(0)
    }
}

&:hover {
        &:before {
            animation: Button .5s cubic-bezier(.25, .46, .45, .94) both infinite
        }
        &:after {
            animation: Button .5s cubic-bezier(.25, .46, .45, .94) reverse both infinite
        }
    } */


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

`;
export default Button;
// crases são tag de template string
