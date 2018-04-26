import React from 'react';
import LoginPannel from './LoginPannel';
import WelcomeComponent from './WelcomeComponent';

class MainPannel extends React.Component {
    constructor(props) {
        super();
        this.state = {
            userId:'',
            password:'',
            isUserIdValid:true,
            isPasswordValid:true,
            isUserPasswordCorrect:true,
            isLogin:false
        }
    }
    updatePassword = (event) => {
        this.setState({password : event.target.value})
        if(!event.target.value) {
            this.setState({
                isPasswordValid:false,
            })
        }else {
            this.setState({
                isPasswordValid:true,
            })
        }
    }
    updateUserId = (event) => {
        this.setState({userId : event.target.value})
        if(!event.target.value) {
            this.setState({
                isUserIdValid:false,
            })
        } else {
            this.setState({
                isUserIdValid:true,
            })
        }
    }
    submitButtonClick = () => {
        let userId = this.state.userId;
        let password = this.state.password;
        if(!userId || !password) {
            if(!userId){
                this.setState({
                    isUserIdValid:false,
                })
            } else if(!password) {
                this.setState({
                    isPasswordValid:false,
                })
            }
        } else if(userId === password) {
           this.setState({
            isLogin:true,
           })
        } else {
            this.setState({
                isLogin:false,
                isUserPasswordCorrect:false
            })
        }
    }
    resetButtonClick = (event) => {
        this.setState({
            userId:'',
            password:'',
            isUserIdValid:true,
            isPasswordValid:true,
            isUserPasswordCorrect:true,
        })
    }
    render() {
        return (
            <div>
                {this.state.isLogin ? <WelcomeComponent /> : 
                <LoginPannel isUserPasswordCorrect={this.state.isUserPasswordCorrect}
                isUserIdValid={this.state.isUserIdValid} updatePassword={this.updatePassword}
                isPasswordValid={this.state.isPasswordValid}
                userId={this.state.userId}
                password={this.state.password} 
                updateUserId={this.updateUserId}
                submitButtonClick={this.submitButtonClick} resetButtonClick={this.resetButtonClick}/>}
            </div>
        );
    }
}

export default MainPannel;