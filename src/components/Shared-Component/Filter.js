import React from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from '../../styled-component/Flex.styled'
import DropDown from './DropDown'
import SearchComponent from './Search'

function FilterComponent({onChangeHandler}) {
  return (
    <HeaderWrapper oxShadow='0 0 9px 3px #8b8686' backgroundColor='transperant'>
        <SearchComponent onChangeHandler={onChangeHandler}></SearchComponent>
        <DropDown onChangeHandler={onChangeHandler}></DropDown>
    </HeaderWrapper>
  )
}

export default FilterComponent
