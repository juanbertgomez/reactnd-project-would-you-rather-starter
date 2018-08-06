import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Route,
  Switch,
  Redirect 
} from "react-router-dom"
import QuestionPage from './QuestionPage'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Logout from './Logout'

class UserHome extends Component {	
    
  	render() {

          const { user, authedUser} = this.props
          debugger
       console.log('Home render...')

      return (
    		<div className="home-title">
    			<h2>Would You Rather</h2>
    			<img 
				  	src={user.avatarURL} 
				  	alt="Avatar" 
				  	className='image-home'
				  	/>
		      <h5>Welcome,  {user.name}</h5>
                   
                    
          <Switch>    
            <Route  path={`/${authedUser}/questions/:questionId`} component={QuestionPage}/>                
            <Route  path={`/${authedUser}/dashboard`} component={Dashboard}/>
            <Route  path={`/${authedUser}/new`} component={NewQuestion}/>     
            <Route  path={`/${authedUser}/LeaderBoard`} component={LeaderBoard}/> 
            <Route  path={`/${authedUser}/logout`}  component={Logout}/>  
            <Redirect to="/404" />             
          </Switch>
        </div> 
    	)
  	}
}

function mapStateToProps ({authedUser, questions, users}) {  
  
  return {
    authedUser,
    user: users[authedUser]     
  };
}

export default connect(mapStateToProps)(UserHome);