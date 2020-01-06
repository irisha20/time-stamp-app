import React, { Component } from 'react';


class StampsResult extends Component {
       
     
    constructor(props){
        super(props)
        this.state={
           stampsList:[]
           
        }
        
      }
      
        
      //get data from db collection and push to stampsList array
      componentDidMount() {
              this.callApi()
                .then(res => this.setState({stampsList: res.express}))
               .catch(err => console.log(err));
                 
            
        }


    
    callApi = async () => {
    const response = await fetch('http://localhost:4000/timestamp/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
    };



render(){
 //map through the array of createAt field   
 const mappingFunction = p => p.createdAt;
 const results = this.state.stampsList.map(mappingFunction);
 //reverse order so the last data piece is at top
 const finalOutput = results.slice(0).reverse().map((result) =>(
   //format date and time value from mongodb collection 
  <li>{ new Date(result).toString() }</li>)
);
     


return( 
<div>
    <h1>Timestamp Entries History </h1>
    {finalOutput}
 
</div>

);
}}
 
export default StampsResult;



