import { useState } from 'react';

import './styles.css';

const Section = ({ id, isSelected, changeIsSelected }) => {
    return (
        <div className={isSelected ? 'section selected' : 'section'} 
             onClick={() => changeIsSelected(id)}>
        </div>
    );
};

export default Section;