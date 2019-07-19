import css from 'styled-jsx/css';

export const historicStyle = css`

    div {
        width: 100%;
    }
    mark {
        font-weight:bold;
        background-color:transparent;
    }
    p {
        min-width:4rem;
    }
    .request {
        width: 100%;
        display:flex;
        background-color: white;
        margin-bottom: .5rem;
        height: 4.5rem;
        align-items:center;
        padding:0 1rem;
        box-shadow: 0px 0.5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
    }
    .request:hover {
        cursor:pointer;
        opacity: .8;
    }
    .request p {
        margin-left: 1rem;
        margin-top: 0;
        margin-bottom: 0;
        min-width:4rem;
    }

    .value {
        padding-bottom: 1rem;
    }
    .photo {
        margin: 0 1rem;
    }
 `