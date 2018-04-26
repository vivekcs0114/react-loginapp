import React from 'react';
import MyLabelComponent from './MyLabelComponent';

class LoginPannel extends React.Component {
    
    render() {
        return (
        <div>
            <div className="loginLabel">
                <h2>Login</h2>
            </div>
            <div>
                { this.props.isUserPasswordCorrect ? null : <MyLabelComponent label="invalid credentials" /> }
            </div>
            <div className="userIdLabel">
                <MyLabelComponent label="User Id" isValid={this.props.isUserIdValid}/><span><input value= {this.props.userId} type="text" name="userId" onChange={this.props.updateUserId}/></span>
            </div>
            <div className="passwordLabel">
                <MyLabelComponent label="Password" isValid={this.props.isPasswordValid}/><span><input type="password" value= {this.props.password} name="password" onChange={this.props.updatePassword}/></span>
            </div>
            <div className="groupButton">
                <span>
                    <button onClick={()=>this.props.resetButtonClick()} className="resetButton">Reset</button>
                </span>
                <span> 
                    <button onClick={()=>this.props.submitButtonClick()} className="submitButton">Submit</button>
                </span>
            </div>
        </div> 
        )
    }
}

export default LoginPannel;