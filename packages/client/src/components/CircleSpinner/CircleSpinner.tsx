import * as React from 'react';
import './CircleSpinner.scss';

const CircleSpinner: React.FC = () =>
{
    return (
        <div className="circle-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default CircleSpinner;