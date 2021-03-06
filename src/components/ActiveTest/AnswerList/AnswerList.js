import React from 'react';
import classes from './AnswerList.module.scss';
import AnswerItem from './AnswerItem/AnswerItem';


const AnswerList = (props) => {
  return (
    <ul className={classes.AnswerList}>
      { props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onClickHandler={props.onClickHandler}
            answerState={props.answerState ? props.answerState[answer.id] : null}
          />
        )
      })}
    </ul>
  )
}

export default AnswerList;