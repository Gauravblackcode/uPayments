import styled from 'styled-components'

export const FlexSpaceBeetWeens = styled.div `
display: flex;
width: 100%;
justify-content: space-between;
margin: 15px;
padding: 13px;
`
export const HeaderWrapper = styled.div `
display: flex;
justify-content: space-between;
margin: ${props =>props.margin || '25px 15px 5px 15px'};
padding: 0px 18px 0px 18px;
background-color: ${props=> props.backgroundColor ||'#fff'};
border-radius: 13px;
box-shadow:${props=> props.boxShadow ||'none'} ;

`

export const FilterItems = styled.div `
width: ${props=> props.width || 'auto'};
margin: 15px 25px 10px 25px;
background-color: ${props=> props.backgroundColor ||'#fff'};
border-radius: 13px;
box-shadow:${props=> props.boxShadow ||'none'} ;
padding: 15px 25px 10px 25px;
`

export const ProductDetailWrapper = styled.div `
display: flex;
width: ${props=> props.width || '100%'};
justify-content: flex-start;
`

export const ProductDetailItem = styled.div `
width: ${props=> props.width || '100%'};
position: relative;
`
