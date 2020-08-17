import React from 'react';
import classes from './Finished.module.scss';
import Button from '../UI/Button/Button';

const Finished = (props) => {
  const countSuccess = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }
    return total;
  }, 0)

  return (
    <div className={classes.Finished}>
      <ul>
        {props.tests.map((testItem, index) => {
          const cls = [
            'fa',
            props.results[testItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[testItem.id]]
          ]

          return (
            <li
              key={index}
            >
              {index + 1}.&nbsp;
              {testItem.title} &nbsp; - &nbsp;
              {testItem.answers[testItem.rightAnswerId - 1].text}
              <i className={cls.join(' ')}/>
            </li>
          )
        })}
      </ul>

      <p>The correct answers:&nbsp;
        <strong>{countSuccess}</strong>&nbsp;
        from&nbsp;
        <strong>{props.tests.length}</strong></p>

      <Button type="primary" onClick={props.onRetry}>Retry</Button>
      <Button type="success" onClick={props.onRetry}>List all tests</Button>
    </div>
  )
}

export default Finished;