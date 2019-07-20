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
    padding: 4.5rem 2.5rem 0 23.5rem;
  }

  #makeReq {
    padding: 0;
    margin-left:19rem;
  }
  .container {
    width:100%;
  }

  .left {
    width:50%;
    background-color: white;
    height: 100vh;
    position:relative;
    display:flex;
    flex-direction:column;
    padding: 3.5rem 2.5rem 0 2.8rem;
  }

  .ilustrate {
    margin: auto;
	  position: absolute;
	  top: 0; left: 0; bottom: 0; right: 0;
  }
  .containerReq aside {
    width:50%;
    background-color:#FAFAFA;
    height: 100vh;
  }
  `