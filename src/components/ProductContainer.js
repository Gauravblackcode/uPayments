import debounce from "lodash.debounce";
import React, { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import productService from "../services/network/product.service";
import {
  ProductContainerWrapperMaster,
  ProductContainerWrapper,
  DetailsProductItemImageWrapper,
  ProductItem,
  ProductItemImage,
  ProductWrapper,
} from "../styled-component/Container.styled";
import { InputField } from "../styled-component/Input.styled";
import { ItemDetails } from "../styled-component/Typography.styled";
import { truncateText } from "../utils/utils";
import FilterComponent from "./Shared-Component/Filter";
// import debounce from "lodash.debaounce"
function ProductContainer(props) {
  const histoy = useHistory();
  const [productsRow, setProductsRow] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    getProducts();
    return () => {
      setProducts([]);
    };
  }, []);

  const getProducts = async () => {
    await productService
      .getProductListService()
      .then(async(resp) => {
        if (resp?.message == "Success") {
          await setProductsRow(resp.products);
          await setProducts(resp.products);
        }
      })
      .catch((err) => {
        setProducts([]);
      });
  };




  const onChangeHandler = (event, data) => {
    if (event.target.name === "search") {
      onSearch(event.target.value);
    } else {
      if (event.target.value === "category") {
        setProducts(productsRow);
      } else {
        const fileteredProduct = productsRow?.filter( (item) => item.category === event.target.value
        );
        setProducts(fileteredProduct);
      }
    }
  };
  
  const handlechange = async (e) => {
    // const fileteredProduct = productsRow?.filter((item) => item.name.toLowerCase().includes(e.toLowerCase()));
      // setProducts(fileteredProduct);

  }



  const onSearch = useMemo(() =>{
    return debounce(handlechange,1000)
  },[])


  const productClickHandler = (product) => {
    console.log(product, "productClickHandler");
    histoy.push({
      pathname: `product/${product._id}`,
      state: product,
    });
  };
  return (
    <ProductContainerWrapperMaster>
      <FilterComponent onChangeHandler={onChangeHandler}></FilterComponent>
      <ProductContainerWrapper>
        {products?.map((product, index) => (
          <ProductWrapper
            onClick={() => productClickHandler(product)}
            key={index}
          >
            <ProductItem>
              <DetailsProductItemImageWrapper>
                <ProductItemImage
                  height=""
                  src={product.avatar}
                  alt={product.name}
                />
              </DetailsProductItemImageWrapper>
            </ProductItem>
            <ItemDetails alignText="left" title={product.name}>
              {truncateText(product.name, 23)}
            </ItemDetails>
            <ItemDetails alignText="center">${product.price}</ItemDetails>
          </ProductWrapper>
        ))}
      </ProductContainerWrapper>
    </ProductContainerWrapperMaster>
  );
}

export default ProductContainer;
