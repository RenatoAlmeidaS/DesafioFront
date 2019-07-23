import css from 'styled-jsx/css';

export const calendarAppetitStyle = css`
.calendar {
    background-color: white;
    width: 100%;
    height: 3.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    align-items:center;
    justify-content:space-between;
    position:relative;
  }

.calendar:hover {
    cursor: pointer;
    opacity: .8;
  }
  .calendar p {
    font-size: 1rem;
    padding-left: 1rem;
    color:rgba(0, 0, 0, 0.87);
  }
  .calendar .placeholder {
    font-size: .75rem;
    position: absolute;
    transform: translate(.5rem, -2.5rem);
    background: linear-gradient(180deg, #fafafa 50%, white 50%);
    padding: 0 .3rem;
    color:rgba(0, 0, 0, 0.54);
  }
    img {
        padding: 0 1rem;
    }
    .hidden {
        display: none;
    }

    .calendarAppetit {
        background-color:white;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        width: 18rem;
        height: 24.875rem;
        box-sizing:border-box;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        transform: translate(0,-24.875rem);
    }

    .choices {
        display: flex;
        margin: 1.75rem 2rem;
        justify-content:flex-end;
        position:relative;
        right:0;
        font-weight:600;
        text-transform: uppercase;
    }
    .data {
        padding: 1rem;
        color: #000000;
    }
    .data p:first-child {
        font-weight:600;
        margin:0;
        margin-bottom: .5rem;
    }
    .data p:nth-child(2) {
        font-size: 1.5rem;
        margin:0;
    }

    .choices div {
        margin: 0;
    }

    .choices div:hover {
        cursor:pointer;
        opacity: .8;
    }

    .choices div:first-child {
        margin-right: 2.5rem;
        color: rgba(0, 0, 0, 0.38);
    }
    .choices div:nth-child(2) {
        color:#FF8822;
    }
 `