import css from 'styled-jsx/css';

export const backArrowStyle = css`
  .back{
    width:3rem;
    height:3rem;
  }
  .one{
    transform: translate(0, 1rem);
  }
  .two {
    position:absolute;
    transform: translate(0, -2rem);
  }
  .back:hover{
    opacity: .8;
    cursor:pointer;
  }

  @media (width < 600px) {
    .two {
      position:relative;
      transform: translate(0, 1rem);

    }
  }
 `