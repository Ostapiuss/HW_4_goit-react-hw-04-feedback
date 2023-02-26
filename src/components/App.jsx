import { useState } from "react";

import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

export const App = () => {
  const [statistic, setStatistic] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const options = Object.keys(statistic);

  const changeStatistic = (event) => {
    const {name} = event.target;

    setStatistic({
      ...statistic,
      [name]: statistic[name] + 1
    })
  }

  const getTotal = () => {
    return statistic.neutral + statistic.good + statistic.bad;
  }

  const getPositivePercentage = () => {
    return Math.round((statistic.good / getTotal()) * 100);
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave a feedback">
        <FeedbackOptions options={options} onLeaveFeedback={changeStatistic} />
        {
          getTotal() > 0 ? (
            <Statistics
              bad={statistic.bad}
              good={statistic.good}
              neutral={statistic.neutral}
              total={getTotal()}
              positivePercentage={getPositivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )
        }
      </Section>
    </div>
  );
};
