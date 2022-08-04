import styled from 'styled-components'
const windowWidth = window.screen.width
export const DashboardPageLayout = styled.div `
position: static;
    height: 100vh;
    background-color: #cdcdcd;
    display: flex;
    justify-content: center;
overflow-y: auto;
    overflow-x: hidden;
`
export const DashboardContentWrapper = styled.div `
width: calc(${windowWidth}px - 20%);
background-color: #cdcdcd;
justify-content: space-around;
`

export const ProductContainerWrapperMaster = styled.div `
padding: 1rem;
`
export const ProductContainerWrapper = styled.div `
display: grid;
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
grid-gap: 1rem;
width: 70%;
    margin:3rem auto 0rem auto;

`
export const SingleProductContainerWrapper = styled.div `
width: 70%;
    margin:3rem auto 0rem auto;

`

export const ProductItem = styled.div `
height: 145px;
    background-color: white;
    width: 115px;
    border-radius: 18px;;
height: 145px;
    background-color: white;
    width: 115px;
    border-radius: 18px;
`
export const ProductItemImageWrapper = styled.div `
display: flex;
margin: auto;
justify-content: center;
`
export const SingleProductItemImageWrapper = styled.div `
display: flex;
margin: auto;
justify-content: center;
background-color: white;
padding: 1rem;
border-radius: 18px;
`
export const DetailsProductItemImageWrapper = styled.div `
display: flex;
    margin: auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    width: fit-content;
    background-color: white;
    padding: 30px;
    border-radius: 20px;
}
`
export const ProductItemImage = styled.img `
    height: ${props=> props.height ||'100px'};
    padding-top: 10px;
    width: ${props => props.width||'93px'};
    margin: auto;
`
export const ProductWrapper = styled.div `
    margin: auto;
`
export const AddItem = styled.p `
position: absolute;
    right: 51px;
    bottom: 0;
    cursor:pointer;
    background-color: black;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 42px;
    align-items: center;
`

export const AddItemDesc = styled.div `
    width: 100%;
`
export const FormContainer = styled.div `
width: 52%;
    margin: auto;
`