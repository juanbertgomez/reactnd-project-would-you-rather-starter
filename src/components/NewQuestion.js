import React, { Component } from 'react'

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
        const { optionOne, optionTwo } =this.state

        //todo: Add Question to Store
        console.group('New options:')
            console.log('One: ', optionOne)
            console.log('Two: ', optionTwo)
        console.groupEnd()
        this.setState(()=>({
            optionOne: '',
            optionTwo: ''
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

export default NewQuestion