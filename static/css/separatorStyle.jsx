import css from 'styled-jsx/css';

export const separatorStyle = css`
    .one {
    height:0;
    width: 100%;
    padding: .75rem 0;
    }
    .two {
    height:0;
    width: 100%;
    padding: .5rem 0;
    }
    .separator {
    background-color: rgba(0, 0, 0, 0.08);
    height: .5rem;
    width: 150%;
    left: -5rem;
    position: absolute;
    z-index:-10;
    }
 `