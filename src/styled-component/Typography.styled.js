import styled from 'styled-components'

export const HeaderTypography = styled.p `
color  : black;
font-size: 22px;
font-style: italic;
font-weight: bold;
`
export const ItemDetails = styled.p `
color  : black;
font-size: 13px;
text-align: ${props => props.alignText || 'center'};
font-size: 13px;
padding: 4px;
margin-top: 2px;

`
export const Productname = styled.p `
text-align: ${props => props.alignText || 'left'};
color: black;
font-size: 40px;
padding-left: 52px;
margin-top: 2px;
font-weight: 500;

`
export const ProductDetailItemPrice = styled.div `
bottom: 0;
position: absolute;
text-align: left;
color: black;
font-size: 30px;
padding-left:${ props => props.marginLeft|| '52px'};
margin-top: 2px;
font-weight: 400;
`
export const DescriptionWrapper = styled.div `
text-align: ${props => props.alignText || 'left'};
color: black;
font-size: 30px;
padding-left:${ props => props.marginLeft|| '52px'};
margin-top: 2px;
font-weight: 400;
`
export const HrProduct = styled.hr`
background-color: #6e6a6a;
    margin-top: 16px;
    height:3px;
`
export const Description = styled.p`
    margin-top: 5px;
color: gray;
`
export const WarningSpan = styled.span`
color: red;
`