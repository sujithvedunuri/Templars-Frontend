import { useState } from "react"
import { GlobalStyle,StyledFormWrapper,StyledForm,StyledInput,StyledButton } from "../../styles/loginStyles"


export default function Login() {
    const [username, setUserName] = useState("default")
    const [password, setPassword] =useState("default")
    const UserNameHandler =(event) =>{
        setUserName(event.target.value)
    }
    const PasswordHandler =(event) =>{
        setPassword(event.target.value)
    }
    const SubmitHandler = (e)=>{
        e.preventDefault()
        console.log("username", username)
        console.log("password", password)
        const requestOptions ={
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify({ username: username, password : password })
        };
        const datafetch = async ()=>{
            const response = await fetch('http://localhost:8080/login',requestOptions);
            const data = await response.json();
            console.log(data)
        }
        datafetch()
    }
  return (
    <>
    <GlobalStyle/>
    <StyledFormWrapper>
        <StyledForm onSubmit={SubmitHandler}>
            <h2>Login</h2>
            <lable htmlFor="name">UserName</lable>
            <StyledInput onChange={UserNameHandler} type="text" name="username" />
            <lable htmlFor="name">Password</lable>
            <StyledInput onChange={PasswordHandler} type="password" name="password" />
            <StyledButton>LOGIN</StyledButton>
        </StyledForm>
    </StyledFormWrapper>
    </>
  ) 
}
