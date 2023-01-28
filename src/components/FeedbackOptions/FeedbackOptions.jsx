import React from "react";
import PropTypes from 'prop-types';
import "../FeedbackOptions/FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, addFeedback }) => {  
        return (
            <div>
                {options.map(option => (
                    <button 
                        type="button"
                        key={option}
                        name={option}
                        onClick={addFeedback}
                    >
                        {option}
                    </button>
                ))}
            </div>
        );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    addFeedback: PropTypes.func,
};