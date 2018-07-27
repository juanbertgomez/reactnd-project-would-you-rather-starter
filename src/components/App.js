import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Question from './Question'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <QuestionPage match={{params: {id:'loxhs1bqm25b708cmbf3g'}}}/>
    )
  }
}

export default connect()(App)
