import css from 'styled-jsx/css';

export const indexStyle = css`
  div {
    display:flex;
  }
  section {
    min-height:100vh; 
    display: flex;
    flex-direction: column; 
    width: 100%;
    align-items: flexStart;
    padding: 4.5rem 2.5rem 0 23.5rem;
  }

  #makeReq {
    padding: 0;
    margin-left:19rem;
  }
  .container {
    width:100%;
    display:flex;
  }

  .left {
    background-color: white;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    padding: 6.5rem 2.5rem 0 2.8rem;
    min-height:100vh;
    width:50%;
    position:relative;
    z-index:1;
  }

  aside {
    width:50%;
  }

  /* RETURN STYLE */

  .returnContent {
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  .returnContent p {
    color: rgba(0, 0, 0, 0.87);
    font-size: 1.25rem;
    margin-bottom: .5rem;
  }

  `