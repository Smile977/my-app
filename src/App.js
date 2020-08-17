import React from 'react';
import classes from './App.module.scss';
import Layout from './hoc/Layout/Layout';
import Test from './containers/Test/Test';

function App() {
  return (
    <Layout>
      <main className={classes.AppWrapper}>
        <h1 className={classes.AppTitle}>Test</h1>
        <Test />
      </main>
    </Layout>
  );
}

export default App;
