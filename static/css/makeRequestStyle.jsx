import css from 'styled-jsx/css';

export const makeRequestStyle = css`

  .container {
    padding: 6.5rem 2.8rem 0 2.8rem;
    line-height: 150%;
    box-sizing:border-box;
  }

  p {
    font-size: 1rem;
  }

  #one .bold {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.87);
  }

  #two .obsText {
    color: rgba(0, 0, 0, 0.87);
    font-weight:bold;
    margin-top:2rem;
    margin-bot: 1.5rem;
    position:relative;
  }

  #two .obs {
    border: 1px solid rgba(0, 0, 0, 0.54);
    box-sizing: border-box;
    border-radius: 5px;
    background-color:white;
    width: 100%;
    height:3.5rem;
    margin-bottom: 6rem;
    font-size: 1rem;
    padding-left: 1rem;
    position:relative;
  }

  #two p {
    margin: 1.5rem 0;
  }

  #two .bold {
    margin-bottom: 1rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.87);
  }
  `