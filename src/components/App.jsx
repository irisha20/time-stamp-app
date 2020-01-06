import React,{ Component }  from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Listview from "./Listview";
import Home from "./Home";



class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
             <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/listview" component={Listview}/>
             </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
