import { Component } from "react";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";
import { Statistics } from "components/Statistics/Statistics";

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }; 
    
    addFeedback = e => {
        const { name } = e.target;
        this.setState(prevState => ({
          [name]: prevState[name] + 1,
        }));
    };

    totalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    positivePercentage = () => {
        return parseInt((this.state.good / this.totalFeedback()) * 100)
    }

    render() {
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                      options={Object.keys(this.state)}
                      addFeedback={this.addFeedback}
                    />
                </Section>

                { this.totalFeedback() === 0 ? (
                        <Notification message="There is no feedback" />
                    ):(
                          <Section title="Statistics">
                            <Statistics
                                good={this.state.good}
                                neutral={this.state.neutral}
                                bad={this.state.bad}
                                total={this.totalFeedback()}
                                positivePercentage={this.positivePercentage()}
                            />
                        </Section>  
                  )}
            </div>
        )
    }
}