import css from 'styled-jsx/css';

export const clientsStyle = css`
    .client {
        display:flex;
        align-items:center;
        margin: 1rem 0;
    }

    .client p {
        color: rgba(0, 0, 0, 0.87);
        font-weight: 600;
        padding-left: 1rem;
        margin: 0;
    }

    .hover:hover {
        cursor:pointer;
        opacity: .8;
    }
    .separator {
        height:1px;
        width:100%;
        background-color:rgba(0, 0, 0, 0.08);
    }
 `