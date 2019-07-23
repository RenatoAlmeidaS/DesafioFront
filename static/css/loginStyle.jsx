import css from 'styled-jsx/css';

export const loginStyle = css`

  .container {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:100vh;
    width: 26rem;
    text-align:center;
    margin: auto;
  }
  .logo {
    margin-top:6.3rem;
  }
  p {
    margin-top: 0;
  }
  input {
    width:100%;
    height: 3.2rem;
    min-height: 3.2rem;
    padding-left: .8rem;
    border: 1px solid rgba(0, 0, 0, 0.54);
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: .5rem;
    transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  }

  input::-webkit-input-placeholder {
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  input:focus::-webkit-input-placeholder, input:valid::-webkit-input-placeholder {
    color: #FF8822;
    font-size: .5rem;
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
    padding-top: 0;
  }
  input:focus{
    border: 2px solid #FF8822;
    box-shadow: 0 0 0 0;
    outline: 0;
    height: 3.2rem;
  }

  a {
    color: rgba(0, 0, 0, .87);
    text-align:center;
    font-weight: 600;
    text-decoration: none;
    font-size: .8rem;
  }
  .footer {
    margin-bottom:2.5rem;
  }
  
  /*MOBILE*/

  @media (width < 600px) {
    .container {
      width: 100%;
      padding: 0 1rem;
    }
  }

  `