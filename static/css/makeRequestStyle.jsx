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

  .bold {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.87);
  }

  #four .checkbox {
    width: 100%;
    height: 3.5rem;
    background-color:white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display:flex;
    align-items:center;
    margin-bottom: 1rem;
  }

  #four .checkbox:hover {
    cursor:pointer;
    opacity: .8;
  }

  #four img {
    margin:0 1rem;
  }

  .button {
    width: 100%;
    display:flex;
    justify-content: flex-end;
  }
  `