import styled from 'styled-components'


export const SearchField = styled.input`
background-color: #e8e8e8;
    color: white;
    outline: none;
    border: none;
    font-size: larger;
    padding: 14px;
    border-radius: 4px;
    -webkit-text-decoration: none;
    text-decoration: none;
    width: 100%;
    color:black;
    cursor: pointer;

&:hover{
    border: 1px solid black;
}
`
export const InputField = styled.input`
background-color: white;
    color: white;
    outline: none;
    border: none;
    font-size: larger;
    padding: 14px;
    border-radius: 15px;
    -webkit-text-decoration: none;
    text-decoration: none;
    width: ${props=> props.width||'100%'};
    color:black;
    margin-top:15px;
    cursor: pointer;
    
    &:hover{
        border: 1px solid black;
    }
    `
    export const TextAreaStyled = styled.textarea`
    background-color: white;
    margin-top:15px;
    color: white;
    outline: none;
    border: none;
    font-size: larger;
    padding: 14px;
    border-radius: 15px;
    -webkit-text-decoration: none;
    text-decoration: none;
    width: 100%;
    color:black;
    cursor: pointer;

&:hover{
    border: 1px solid black;
}
`
    export const SelectOptions = styled.select`
    background-color: white;
    margin-top:15px;
    color: white;
    outline: none;
    border: none;
    font-size: larger;
    padding: 14px;
    border-radius: 15px;
    -webkit-text-decoration: none;
    text-decoration: none;
    width: ${props=> props.width||'105%'};
    color:black;
    cursor: pointer;

&:hover{
    border: 1px solid black;
}
`

