import css from 'styled-jsx/css';

export const sideMenuStyle = css`

    .container {
        background-color: #FF8822;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
        height: 100vh;
        width:21rem;
        position: absolute;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        text-align:center;
    }
    p {
        font-size:.75rem;
        margin-bottom: 2rem;
    }
    .logo {
        margin-top: 3rem;
    }
    .menu {
        margin-bottom: 7rem;
        font-weight:600;
        font-size:.8rem;
        text-align:left;
    }
    nav {
        width:100%;
    }

    .selected {
        background-color:white;
        color: #FF8822;
    }

    .category {
        height: 3.5rem;
        display:flex;
        padding-left:2rem;
        align-items:center;
        cursor:pointer;
    }

    .subcategory {
        height: 1.5rem;
        display:flex;
        margin-left: 3.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-left: 2rem;
        align-items:center;
        cursor:pointer;
    }

    .category:hover{
        opacity: 1;
        background-color: rgba(255,255,255,.5);
    }
    .subcategory:hover{
        opacity: 1;
    }
    .subselected {
        border-left: 2px solid white;
    }

    .unselect {
        opacity :.54;
    }

    .category img {
        margin-right: 1.5rem;
    }
    `