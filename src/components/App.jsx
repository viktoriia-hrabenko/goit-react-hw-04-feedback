import { useState } from "react";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";
import { Statistics } from "components/Statistics/Statistics";

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const addFeedback = e => {
        const { name } = e.target;
        switch (name) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1)
                break;
            default:
                break;
        }
    };

    const totalFeedback = () => {
        return good + neutral + bad;
    }

    const positivePercentage = () => {
        const total = totalFeedback();
        return parseInt((good / total) * 100)
    }

    const options = ['good', 'neutral', 'bad']
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                      options={options}
                      addFeedback={addFeedback}
                    />
                </Section>

                { totalFeedback() === 0 ? (
                        <Notification message="There is no feedback" />
                    ):(
                          <Section title="Statistics">
                            <Statistics
                                good={good}
                                neutral={neutral}
                                bad={bad}
                                total={totalFeedback()}
                                positivePercentage={positivePercentage()}
                            />
                        </Section>  
                  )}
            </div>
        )
    
}