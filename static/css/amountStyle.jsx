import css from 'styled-jsx/css';

export const amountStyle = css`

    div {
        position: relative;
    }
    .container {
        position:fixed;
        right:0;
        bottom:0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        height:4.25rem;
        width:100%;
        background-color: #FAFAFA;
        overflow-x:hidden;
    }
    .content {
        position: absolute;
        right:0;
        padding-right: 2.8rem;
        display:flex;
        align-items: center;
        height:4.25rem;
    }

    .img {
        padding: 0 1.75rem;
        width: 3rem;
        height:3rem;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .img:hover {
        opacity: .8;
        cursor: pointer;
    }
    .button {
        margin-left:7.75rem;
        background-color: #FF8822;
        color: white;
        border-radius: 5px;
        height: 3rem;
        width: 12rem;
        display:flex;
        align-items:center;
        padding: 0 1.5rem;
        justify-content: space-between;
        font-size: .8rem;
    }

    .button:hover {
        cursor:pointer;
        opacity: .8;
    }

    .content div {
        display: flex;
        align-items:center;
    }

/*MOBILE */

@media(width < 600px) {
    .button {
        margin-left: 0;
        width: 11.5rem;
    }
    .content {
        width: 100%;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
    }
}
 `