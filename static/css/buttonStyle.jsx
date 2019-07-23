import css from 'styled-jsx/css';

export const buttonStyle = css`
    input {
        background-color: #FF8822;
        border-radius: 100px;
        width: 20.5rem;
        height: 3rem;
        border: none;
        color: white;
        font-size:.8rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        transition: opacity .3s;
        outline: none;
    }
    .button {
        width: 13rem;
    }

    .secondary {
        background-color:transparent;
        color: rgba(0, 0, 0, 0.87);
        border: 2px solid rgba(0, 0, 0, 0.87);
        border-radius: 100px;
        font-weight:600;
        margin-right: 1rem;
    }
    #block {
        opacity: .4;
    }
    #block:hover {
        cursor: initial;
    }
    input:hover{
        cursor: pointer;
        opacity: .8;
    }
/*MOBILE */

@media(width < 600px) {
    .noMargin{
        margin:0;
        margin-bottom: 1rem;
    }
}
 `