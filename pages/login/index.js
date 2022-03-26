import { useState } from "react"
import styled, {createGlobalStyle, css} from "styled-components"

const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }
     
    body{
        font-family: Arial, Helvetica, sans-serif;
        background: linear-gradient(to top,lightblue , #e1eec3);
        height: 100%;
        margin: 0;
        color: black;
    }
`
const SharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`
const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 30%;
    margin-top: 10%;

    h2 {
        margin-left: 41%;
        padding-bottom: 10px;
    }
`
const StyledForm = styled.form`
    width: 550px;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`
const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${SharedStyles}
`
const StyledButton = styled.button`
    display: block;
    background: linear-gradient(to top,lightblue , #e1eec3);
    color: #fff;
    font-size: .9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    margin-left: 38%;
`

export default function Login() {
    const [user_name, setUserName] = useState("default")
    const [password, setPassword] =useState("default")
    const UserNameHandler =(event) =>{
        setUserName(event.target.value)
    }
    const PasswordHandler =(event) =>{
        setPassword(event.target.value)
    }
    const SubmitHandler = (e)=>{
        e.preventDefault()
        console.log("user_name", user_name)
        console.log("password", password)
        const requestOptions ={
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify({ user_name: user_name, password : password })
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
