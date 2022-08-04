import styled from 'styled-components'


export const ButtonSubmit = styled.button `
width: 100%;
margin: 15px;
padding: 10px;
border-radius: 15px;
background-color: white;
font-size: 26px;
margin-top: 39px;
cursor: pointer;
&:hover{
    background-color:black;
    color:white;
}
` 

export const CancelButton = styled.button `
background-color:grey;
color:white;
outline: none;
border:none;
padding:10px;
border-radius: 10px;
text-decoration: none;
width:90%;
cursor:pointer;

&:hover{
    background-color:red;
}
` 

