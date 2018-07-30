import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'
import { formatUser } from '../utils/helper';


class LeaderBoard extends Component {
    render () {
        return (
            <div>
                <h3 className='center'> Leader Borad </h3>
                <ul className='dashboard-list'>
                    {this.props.userIds.map((id) => 
                        (
                            <li key={id}>
                                <User id ={id} />
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}

function mapSatetToProps({users}){
    return {
        userIds: Object.keys(users)
        .sort((a,b) => formatUser(users[b]).totalPoints - formatUser(users[a]).totalPoints)
    }
}
export default connect(mapSatetToProps)(LeaderBoard)