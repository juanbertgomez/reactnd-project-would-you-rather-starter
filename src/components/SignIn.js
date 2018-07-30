import React, { Component } from 'react'
import { connect } from 'react-redux'


class sigIn extends Component {
    render () {
        return (
            <div className='center'>
                <div className='card'>
                    <div>
                        <h3 className='center'> Hello </h3> 
                        <img
                            src="https://tylermcginnis.com/would-you-rather/tyler.jpg"
                            alt='hello'
                            className='avatar'
                        />
                    </div>
                    <div>
                        <h3 className='question-title'>Welcome to the Would you rather app</h3>
                        <h3 className='question-text'>Please Signing</h3> 
                        <button className='btn'> 
                            Hello
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default sigIn