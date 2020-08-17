import React, {Component} from 'react';
import classes from './Test.module.scss';
import ActiveTest from '../../components/ActiveTest/ActiveTest';
import Finished from '../../components/Finished/Finished';

class Test extends Component {
  state = {
    results: {},
    isFinished: false,
    answerState: null,
    currentTest: 0,
    tests: [
      {
        id: 1,
        title: 'слово',
        rightAnswerId: 2,
        answers: [
          {id: 1, text: 'world'},
          {id: 2, text: 'word'}
        ]
      },
      {
        id: 2,
        title: 'стол',
        rightAnswerId: 1,
        answers: [
          {id: 1, text: 'table'},
          {id: 2, text: 'chair'}
        ]
      },
    ]
  }

  isFinishedTest() {
    return this.state.currentTest + 1 === this.state.tests.length;
  }

  onClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const test = this.state.tests[this.state.currentTest];
    const results = this.state.results;

    if (test.rightAnswerId === answerId) {
      if (!results[test.id]) {
        results[test.id] = 'success';
      }

      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isFinishedTest()) {
          this.setState({
            isFinished: true,
            results
          })
        } else {
          this.setState({
            answerState: null,
            currentTest: this.state.currentTest + 1
          })
        }

        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[test.id] = 'error';
      this.setState({
        results,
        answerState: {[answerId]: 'error'}
      })
    }
  }

  retryHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      answerState: null,
      currentTest: 0
    })
  }

  render() {
    return (
      <div className={classes.Test}>
        {this.state.isFinished
          ? <Finished
            results={this.state.results}
            tests={this.state.tests}
            onRetry={this.retryHandler}
          />
          : <ActiveTest
            test={this.state.tests[this.state.currentTest]}
            currentTest={this.state.currentTest + 1}
            testLenght={this.state.tests.length}
            onClickHandler={this.onClickHandler}
            answerState={this.state.answerState}
          />
        }

      </div>
    )
  }
}

export default Test;