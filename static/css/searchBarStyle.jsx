import css from 'styled-jsx/css';

export const searchBarStyle = css`
    div {
        width: 100%;
    }
    .bar {
        border-bottom: 1px solid rgba(0, 0, 0, 0.34);
        height: 3rem;
        margin-top: 1.5rem;
        color: rgba(0, 0, 0, 0.54);
        display:flex;
        align-items:center;
        margin-bottom: 1rem;
    }
    input {
        background-color:transparent;
        border: none;
        width: 100%;
        box-shadow: 0 0 0 0;
        outline: 0;
        height:2rem;
        font-size:1rem;
        color: rgba(0, 0, 0, 0.54);
    }
    .lupa {
        margin-right: 1rem;
    }
    .bar:hover{
        cursor: pointer;
        opacity: .7;
    }
 `