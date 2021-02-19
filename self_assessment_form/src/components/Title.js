import React from 'react';

const Title = ({ className, children }) => {
    return (
        <h2 className={className}>
            {children}
        </h2>
    )
}

export default Title;
