import React, { useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import productService from "../services/network/product.service";
import {
  SingleProductItemImageWrapper,
  ProductItem,
  ProductItemImage,
  ProductWrapper,
  SingleProductContainerWrapper,
} from "../styled-component/Container.styled";
import { ProductDetailItem, ProductDetailWrapper } from "../styled-component/Flex.styled";
import { Description, DescriptionWrapper, HrProduct, ItemDetails, ProductDetailItemPrice, Productname } from "../styled-component/Typography.styled";
import FilterComponent from "./Shared-Component/Filter";

function ProductContainerDetails() {

  const [productsInfo, setproductsInfo] = React.useState({});
  const {id} = useParams()
  const {path} = useRouteMatch()

  useEffect(() => {
    getProductById();
    return () => {
      setproductsInfo([]); 
    };
  }, [id]);


  const getProductById = async () => {

    await productService.getProductByIdService(id)
      .then((resp) => {
        resp?.message == "Success" && setproductsInfo(resp.product);
      })
      .catch((err) => {
        setproductsInfo([]);
      });
  };


  return (

      <SingleProductContainerWrapper>
        <ProductDetailWrapper>

          <ProductDetailItem width="20%">
          <SingleProductItemImageWrapper>
                <ProductItemImage width='151px' height='none' src={productsInfo?.avatar} alt={productsInfo?.name}/>
           </SingleProductItemImageWrapper>
          </ProductDetailItem>
          <ProductDetailItem width="80%">
              <Productname > {productsInfo?.name}</Productname>
              <ProductDetailItemPrice > ${productsInfo?.price}</ProductDetailItemPrice>
          </ProductDetailItem>
        </ProductDetailWrapper>
        <HrProduct></HrProduct>
              <DescriptionWrapper marginLeft="2px" > Description</DescriptionWrapper>
        <Description>{productsInfo?.description}</Description>
      </SingleProductContainerWrapper>
  );
} 

export default ProductContainerDetails;
