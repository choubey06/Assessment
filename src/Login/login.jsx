import React, { Component } from 'react';
import './login.css';
import cartReducer from '../ducks/cart';
import productsReducer from '../ducks/products';
import productsData from '../data/products';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from '../App';

class Login extends Component {
    render() {
        return (
            <div><center>
                
                <div className="form">
               User Id:  <input type="text" id="name" className="input"/>
               <br/><br/>
               Password: <input type="password" id="password"/>
               <br/><br/>
               <input type="submit" onClick={this.verify} value="Login" className="btn"/>
               </div></center>
               <div className="mydiv" id="mydiv"></div>
            </div>
        );
    }

    verify(){
         const rootReducer = combineReducers({
            cart: cartReducer,
            products: productsReducer
        });
        
        let store = createStore(
            rootReducer,
            {
                products: productsData 
            },
           
        );
        if(document.getElementById("name").value==="user" && document.getElementById("password").value==="user"){
           
            render(
                <Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root1')
            );
        }
        
        else{
            document.getElementById("mydiv").innerHTML = '<center><b>Invalid Credentials!<br>Enter User Id = "user" <br> & Password="user"</b></center>';
        }
        
    }
}

export default Login;

