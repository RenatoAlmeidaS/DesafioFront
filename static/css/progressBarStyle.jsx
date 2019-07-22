import css from 'styled-jsx/css';

export const progressBarStyle = css`
.container div {
    height: .75rem;
}

p { 
    font-size:1rem;
    color:rgba(0, 0, 0, 0.64);
    margin-bottom: .5rem;
}
.bar {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    width: 100%;
    z-index:1;
}

.inside {
    transition-timing-function: ease-in-out;
    transition: width 1s;
    width: 0;
    background-color:  #FF8822;
    border-radius: 5px;
}
 `