import React from 'react';
import classes from './ActiveTest.module.scss';
import AnswerList from './AnswerList/AnswerList';

const ActiveTest = (props) => {
  return (
    <div className={classes.ActiveTest}>
      <div className={classes.header}>
        <span>
          <strong>1.</strong>&nbsp;
          {props.test.title}
        </span>
        <small>{props.currentTest} from {props.testLenght}</small>
      </div>

      <AnswerList
        answers={props.test.answers}
        onClickHandler={props.onClickHandler}
        answerState={props.answerState}
      />

    </div>
  )
}

export default ActiveTest;