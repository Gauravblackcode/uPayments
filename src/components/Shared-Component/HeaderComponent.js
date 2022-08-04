import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderWrapper } from '../../styled-component/Flex.styled'
import { HeaderTypography } from '../../styled-component/Typography.styled'

function HeaderComponent() {
  const history = useHistory()
  return (
    <HeaderWrapper boxShadow='0 0 9px 3px #8b8686'>
        <HeaderTypography onClick={() =>  history.replace('/')}>UPayment Store</HeaderTypography>
        <HeaderTypography>Register</HeaderTypography>
    </HeaderWrapper>
  )
}

export default HeaderComponent