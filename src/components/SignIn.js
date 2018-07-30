import React, { Component } from 'react'
import { connect } from 'react-redux'


class sigIn extends Component {
    render () {
        return (
            <div className='card'>
                <div>
                    <div>
                    <h3 className='center'>Welcome to the Would you rather app</h3>
                    </div>
                    <div className='quetion-info'>
                        <h3 >Please Signing</h3> 
                    </div>
                </div>
            </div>
        )
    }
}


export default sigIn