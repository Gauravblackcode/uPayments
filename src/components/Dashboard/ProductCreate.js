import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import ProductService from "../../services/network/product.service";
import { ButtonSubmit } from "../../styled-component/Button.styled";
import {
  AddItemDesc,
  FormContainer,
  SingleProductContainerWrapper,
} from "../../styled-component/Container.styled";
import { ProductDetailWrapper } from "../../styled-component/Flex.styled";
import {
  InputField,
  SelectOptions,
  TextAreaStyled,
} from "../../styled-component/Input.styled";
import {
  DescriptionWrapper,
  Productname,
  WarningSpan,
} from "../../styled-component/Typography.styled";

function ProductCreateComponent(props) {

  const [categories, setcategories] = React.useState([])
const history = useHistory() 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const submitHnadler = async (data) => {

    const payload = {
      name: data?.productName,
      price: data?.price,
      category: data?.category,
      Description: data?.description,
      avatar: data?.URL,
      DeveloperEmail: "gauravblackcode@gmail.com",
    };
    await ProductService.createProductService(payload).then((resp)=> {
      resp?.message === 'Sucess' ? history.push('product'): console.log(resp, 'err')
    })
  };

  const errorHandler = (err) => {};

  return (
    <SingleProductContainerWrapper>
      <ProductDetailWrapper>
        <AddItemDesc>
          <Productname alignText="center" marginLeft="2px">
            {" "}
            Description
          </Productname>

          <div>
            <form onSubmit={handleSubmit(submitHnadler, errorHandler)}>
              <FormContainer>
                <InputField
                  {...register("productName", {
                    required: "Product name is required",
                  })}
                  type="text"
                  id="prod-name"
                  placeholder="Product Name"
                ></InputField>
                {errors.productName && (
                  <WarningSpan>{errors.productName.message}</WarningSpan>
                )}

                <TextAreaStyled
                  {...register("description", {
                    required: "Description name is required",
                  })}
                  rows="4"
                  id="description"
                  placeholder="Description"
                ></TextAreaStyled>
                {errors.description && (
                  <WarningSpan>{errors.description.message}</WarningSpan>
                )}

                <InputField
                  {...register("URL", { required: "URL is required" })}
                  type="text"
                  id="img-url"
                  placeholder="Image URL"
                ></InputField>
                {errors.URL && <WarningSpan>{errors.URL.message}</WarningSpan>}

                <InputField
                  {...register("price", { required: "Price is required" })}
                  type="text"
                  id="price"
                  placeholder="Price"
                ></InputField>
                {errors.price && (
                  <WarningSpan>{errors.price.message}</WarningSpan>
                )}

                <SelectOptions
                  name="Category"
                  id="Category"
                  {...register("description", {
                    required: "Category is required",
                  })}
                >
                 {categories?.map((item, index) =>  <option key={index} value={item?.name}>{item?.name}</option> )}
                </SelectOptions>
                {errors.description && (
                  <WarningSpan>{errors.description.message}</WarningSpan>
                )}

                <ButtonSubmit type="submit">Submit</ButtonSubmit>
              </FormContainer>
            </form>
          </div>
        </AddItemDesc>
      </ProductDetailWrapper>
    </SingleProductContainerWrapper>
  );
}

export default ProductCreateComponent;
