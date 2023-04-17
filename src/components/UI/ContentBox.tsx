import React from "react";

import contentBoxClasses from './ContentBox.module.css';

const ContentBox: React.FC<{ children?: React.ReactNode, className?: string, }> = (props) => {
    const classes = `${contentBoxClasses.box} ${props.className ? props.className : ""} `;
    
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default ContentBox;