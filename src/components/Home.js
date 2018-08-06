import React  from 'react';
import { Link } from "react-router-dom";

const Home = () => (  
    <div className="home-title">
		<h2>Would You Rather </h2>		
     	<h5>App will ask to you some questions in the form: “Would you rather [option A] or [option B] ?</h5> 
     	<hr/>
     	<h5>Do you want to play?</h5> 
     	<Link to="/login">go to Login</Link>  
    </div>
);

export default Home;