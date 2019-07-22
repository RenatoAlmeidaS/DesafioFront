import css from 'styled-jsx/css';

export const confirmFoodStyle = css`
 div {
    height:3.5rem;
 }
 .container {
    background-color: #FF8822;
    box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.2);
    position: fixed;
    right:0;
    bottom:0;
    width:38%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size: 1rem;
    color:white;
 }

 .container:hover {
     cursor:pointer;
 }
 .value {
     margin-left: 2rem;
 }

 img {
     margin-left: 1.5rem;
     margin-right: 2rem;   
 }
 `