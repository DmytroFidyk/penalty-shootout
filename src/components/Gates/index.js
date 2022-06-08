import { useState } from 'react';

import './styles.css';

import Section from '../Section';

const Gates = () => {
    
    const sectionsModel = [
        {id: 1, isSelected: false},
        {id: 2, isSelected: false},
        {id: 3, isSelected: false},
        {id: 4, isSelected: false},
        {id: 5, isSelected: false},
        {id: 6, isSelected: false},
        {id: 7, isSelected: false},
        {id: 8, isSelected: false}
    ];

    const [sections, setSections] = useState(sectionsModel);

    function changeIsSelected(id) {
        const updatedSections = sections.map(section => {
            if (section.id === id) {
                section.isSelected = true;
            }
            else {
                section.isSelected = false;
            }

            return section;
        });

        setSections(updatedSections);
    }

    let sectionsComponents = [];

    if (sections !== 'undefind') {
        sectionsComponents = sections.map(section => {
            return (
                <Section 
                    key={section.id} 
                    id={section.id}
                    isSelected={section.isSelected}
                    changeIsSelected={changeIsSelected}
                />
            );
        });
    }
    
    return (
        <div className="gates__container">
            <div className="gates">
                { sectionsComponents }
            </div>
        </div>
    );
};

export default Gates;