import css from 'styled-jsx/css';

export const leftSideStyle = css`

  .leftContent {
    position:fixed;
    min-height: 100vh;
    font-size: 1rem;
    width: 31%;
  }

  .ilustrate {
    position: absolute;
    top: 20%;
    left: 12%;
  }
  .foodName {
      color:rgba(0, 0, 0, 0.87);
      font-weight:bold;
      padding-left: 1rem;
  }
  .obs {
      margin-bottom: 0;
  }
  .totalVal {
      display:flex;
      justify-content:space-between;
      align-items:center;
      font-size:1.25rem;
  }
  .title {
      font-size:1.25rem;
      color: rgba(0, 0, 0, 0.87);
  }
  .product {
      display: flex;
      align-items:center;
      justify-content:space-between;
      width: 100%;
  }
  .product p {
      margin: 0;
  }
  .product div {
      display: flex;
      align-items:center;
  }

 `