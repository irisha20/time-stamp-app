import React from 'react';
import axios from 'axios';
import Header from "./Header"; 
import Footer from "./Footer"; 
 




function handleClick(){

axios.post('http://localhost:4000/timestamp/add')
            .then(res => console.log(res.data));


}



//UI
const home = () => {
    return (
     <div>
    <Header />
    <a href="/listview"> 
     <button onClick={handleClick} > Next Page</button>
     </a>
    <Footer />
    </div>
    );
}
 
export default home;