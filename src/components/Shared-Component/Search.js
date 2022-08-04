import React from 'react'
import { FilterItems } from '../../styled-component/Flex.styled'
import { InputField } from '../../styled-component/Input.styled'

function SearchComponent({onChangeHandler}) {
  return (
 
       <InputField
             width='40%'
             onChange={onChangeHandler}
                  type="text"
                  id="prod-name"
                  name="search"
                  placeholder="Product Name"
                ></InputField>

  )
}

export default SearchComponent