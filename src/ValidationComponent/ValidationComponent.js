import React from 'react';

const validationComponent = (props) => {
    return (props.text < 5 ? <p>text too short</p> : <p>text long enough</p>);
}

export default validationComponent