import styled, {createGlobalStyle, css} from "styled-components"

export  const GlobalStyle = createGlobalStyle`
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
export  const SharedStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box;
`
export  const StyledFormWrapper = styled.div`
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
export  const StyledForm = styled.form`
width: 550px;
max-width: 700px;
padding: 40px;
background-color: #fff;
border-radius: 10px;
box-shadow: border-box;
box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`
export  const StyledInput = styled.input`
display: block;
width: 100%;
${SharedStyles}
`
export  const StyledButton = styled.button`
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