import React from "react";
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";
import StampsResult from "./StampsResult";


function handleClick(){
    
    axios.post('http://localhost:4000/timestamp/add')
                .then(res => console.log(res.data));
        
    }
//if the user stays more than one minute --> add timastap and save in db
 setTimeout(handleClick, 60000);



const listview = () => {
    
return (
<div>
    <Header />
    <p><a href="/">  <button onClick={handleClick}> Go Back</button></a></p>
    <StampsResult />
    <Footer />
    </div>
);
}
 
export default listview;

