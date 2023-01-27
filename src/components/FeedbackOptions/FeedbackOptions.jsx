import {Component} from "react";
import PropTypes from 'prop-types';
import "../FeedbackOptions/FeedbackOptions.module.css";

export class FeedbackOptions extends Component {  
    render() {
        const { options, addFeedback } = this.props;
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
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    addFeedback: PropTypes.func,
};