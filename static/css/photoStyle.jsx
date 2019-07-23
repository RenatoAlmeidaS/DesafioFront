import css from 'styled-jsx/css';

export const photoStyle = css`

img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100px;
}

div {
  width: 2.5rem;
  height: 2.5rem;
}

.perfil {
  position: absolute;
  right: 2.5rem;
  top: 1rem;
}

/*MOBILE*/
@media (width < 600px) {
  .perfil {
    right: 1rem;
}
.onreq {
  display:none;
}
}
  `