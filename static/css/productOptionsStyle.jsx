import css from 'styled-jsx/css';

export const productOptionsStyle = css`

.container {
  font-size: 1rem;
}
.title {
  font-weight:bold;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 1.5rem;
}

p {
  margin: .5rem 0;
}
.box {
  height: 3.5rem;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color:white;
  margin-top: 1rem;
  display:flex;
  align-items:center;
  cursor: pointer;
}
.box:hover {
  opacity:.8;
}

.checkbox {
  height: 1.5rem;
  width: 1.5rem;
  padding: 0 1rem;
}
.box p {
  padding-left: 1rem;
}
 `