import React from 'react'
import ProductService from '../../services/network/product.service';
import { FilterItems } from '../../styled-component/Flex.styled'
import { SelectOptions } from '../../styled-component/Input.styled'

function DropDown({onChangeHandler}) {


  const [categories, setcategories] = React.useState([])

  React.useEffect(() => {
    getCategoriesCall()
    return () => {
      setcategories([]); 
    };
  }, []);

  const getCategoriesCall = async () => {
    await ProductService.getCategoryService().then((resp)=> {
      resp?.message === 'Success' ? setcategories(resp?.categories):  console.log(resp, "eer")
    })

  }
  return (
       <SelectOptions
       width='30%'
       onChange={onChangeHandler}
                  name="Category"
                  id="Category"
                >
                  <option   selected value={'category'}>Category</option> 
                 {categories?.map((item, index) =>  <option key={index} value={item?.name}>{item?.name}</option> )}
                </SelectOptions>

  )
}

export default DropDown