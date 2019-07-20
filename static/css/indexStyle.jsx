import css from 'styled-jsx/css';

export const indexStyle = css`
  div {
    display:flex;
  }
  .back{
    width:3rem;
    height:3rem;
  }
  .backMakeRequest {
    position:absolute;
    top: -3rem;
  }
  .back:hover{
    opacity: .8;
    cursor:pointer;
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
    position:relative;
    display:flex;
    flex-direction:column;
    padding: 6.5rem 2.5rem 0 2.8rem;
    flex-grow:1;
  }

  .left .leftContent {
    position:fixed;
    height: 100vh;
  }

  .ilustrate {
    position: absolute;
    top: 20%;
    left: 20%;
  }

  .containerReq aside {
    background-color:#FAFAFA;
    height: 100vh;
    flex-grow:1;
    overflow-x:hidden;
  }
  `