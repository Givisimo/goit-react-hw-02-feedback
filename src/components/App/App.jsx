import React, { Component } from 'react';
import './App.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickChoice = e => {
    e.preventDefault();
    const { name } = e.currentTarget;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return ((good / this.countTotalFeedback.bind(this)()) * 100).toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <div>
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.clickChoice}
            />
          </div>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              total={this.countTotalFeedback()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
