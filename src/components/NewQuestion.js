import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'

class NewQuestion extends Component {
    state={
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name]: value
          }) 
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, authedUser } = this.props
        const { optionOne, optionTwo } =this.state

        //todo: Add Question to Store
        dispatch(handleSaveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }))

        console.group('New options:')
            console.log('One: ', optionOne)
            console.log('Two: ', optionTwo)
        console.groupEnd()
        this.setState(()=>({
            optionOneText: '',
            optionTwoText: ''
        }))
    }


    render () {
        const { optionOne, optionTwo } = this.state
        
        return(
            <div>
                <h3 className='center'> Would you rather</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <textarea
                        name="optionOne"
                        placeholder="First option"
                        value = { optionOne }
                        onChange ={this.handleChange}
                        className='textarea'
                    />
                    <h3>Or</h3>
                    <textarea
                        name="optionTwo"
                        placeholder="Second option"
                        value = { optionTwo }
                        onChange ={this.handleChange}
                        className='textarea'
                    />
                    <button
                        className='btn'
                        type='submit'
                        disabled={(optionOne === '' || optionTwo === '')}
                    >
                        Submit
                    </button>

                </form> 
            </div>
        )
    }
}

function mapSatateToProp ({authedUser}) {
    return {
        authedUser
    }
}
export default connect(mapSatateToProp)(NewQuestion)