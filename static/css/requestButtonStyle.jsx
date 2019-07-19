import css from 'styled-jsx/css';

export const requestButtonStyle = css`
    div {
        width: 100%;
    }
    .button {
        background-color: #FFF;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border:none;
        border-radius: 5px;
        height: 3.5rem;
        font-size:.8rem;
        font-weight:600;
        margin-top: .5rem;
        margin-bottom: 1.5rem;
        color: rgba(0, 0, 0, 0.54);
        text-align:left;
        display:flex;
        align-items:center;
    }
    img {
        margin: 0 1rem;
    }
    .button:hover{
        cursor: pointer;
        opacity: .7;
    }
 `