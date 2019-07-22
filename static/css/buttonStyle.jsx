import css from 'styled-jsx/css';

export const buttonStyle = css`
    input {
        background-color: #FF8822;
        border-radius: 100px;
        width: 20rem;
        height: 3rem;
        border: none;
        color: white;
        font-size:.8rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        transition: opacity .3s;
    }
    .button {
        width: 13rem;
    }
    #block {
        opacity: .4;
    }
    #block:hover {
        cursor: initial;
    }
    input:hover{
        cursor: pointer;
    }
 `