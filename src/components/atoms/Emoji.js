import React from 'react';

const Emoji = props => (
    <span 
        role="img"
        style={{ fontSize: props.fontSize }}
    >
        {props.symbol}
    </span>
);
export default Emoji;