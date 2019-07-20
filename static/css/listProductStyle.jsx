import css from 'styled-jsx/css';

export const listProductStyle = css`

.category p {
  font-weight:bold;
  color:rgba(0, 0, 0, 0.87);
}
.category {
  margin-top: 1.5rem;
  font-size:1rem;
  margin-bottom: 2rem;
}
.product {
  display:flex;
  align-items:center;
  width: 100%;
  justify-content: space-between;
  margin: .5rem 0;
}

.product:hover {
  cursor:pointer;
  opacity: .8;
}

.product p {
  padding-left: 1rem;
}

.separator {
  height:1px;
  width:100%;
  background-color:rgba(0, 0, 0, 0.08);
}

.container {
  padding-bottom: 3rem;
  position:relative;
}

.separatorCategory {
  background-color: rgba(0, 0, 0, 0.08);
  height: .5rem;
  width: 150%;
  left: -5rem;
  position: absolute;
  z-index:-10;
}

.product div {
  display:flex;
  align-items:center;
}
  `