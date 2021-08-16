import React from 'react';
import style from './style.module.scss';

const Box = (props) => {
    const { customClassName } = props;

    return <div className={`${style.box} ${customClassName}`}>
        <div className={`innerBox ${style.innerBox}`} />
    </div>
}

export default Box;