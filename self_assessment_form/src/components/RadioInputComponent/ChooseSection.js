import React from 'react';

const ChooseSection = ({ title, isRequired, children }) => {
    return (
        <div className="chooseSection">
            <p>{title}
                {isRequired && <span className='warning'>*</span>} </p>
                {children}
        </div>
    );
}

export default ChooseSection;