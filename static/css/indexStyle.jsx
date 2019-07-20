import css from 'styled-jsx/css';

export const indexStyle = css`
  div {
    display:flex;
  }
  .back{
    padding-bottom:1rem;
    width:3rem;
    height:3rem;
  }
  .back:hover{
    opacity: .8;
    cursor:pointer;
  }
  p {
    background-color:red;
  }
  section {
    min-height:100vh; 
    display: flex;
    flex-direction: column; 
    width: 100%;
    align-items: flexStart;
    margin: 4.5rem 2.5rem 0 23.5rem;
  }
  `