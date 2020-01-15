import React, { useState } from 'react';
import './App.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChoice = e => {
    e.preventDefault();
    const { name } = e.currentTarget;
    if (name === 'good') {
      setGood(prevState => prevState + 1);

      return;
    }
    if (name === 'neutral') {
      setNeutral(prevState => prevState + 1);
      return;
    }
    if (name === 'bad') {
      setBad(prevState => prevState + 1);
      return;
    }
  };
  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  }

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <div>
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={handleChoice}
          />
        </div>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

// class App extends Component {

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }
//
//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     return ((good / this.countTotalFeedback.bind(this)()) * 100).toFixed(0);
//   }
//
//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className="App">
//         <Section title="Please leave feedback">
//           <div>
//             <FeedbackOptions
//               options={this.state}
//               onLeaveFeedback={this.handleChoice}
//             />
//           </div>
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//               total={this.countTotalFeedback()}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default App;
