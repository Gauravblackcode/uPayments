import { apiRequest } from "./api";

const METHOD_GET = "GET";
const METHOD_POST = "POST";
const METHOD_PUT = "PUT";
const METHOD_DELETE = "DELETE";

const GET_PRODUCTS = process.env.REACT_APP_API_KEY + "products";
const GET_PRODUCTS_BY_ID = process.env.REACT_APP_API_KEY +"products";
const CREATE_PRODUCTS = process.env.REACT_APP_API_KEY + "products";
const CATEGORY_LIST = process.env.REACT_APP_API_KEY +"categories";



/* @request url, method ,@return {Object} */

const getProductListService = () => {
    return apiRequest({
        method: METHOD_GET,
        url: GET_PRODUCTS,
    });
}


const getProductByIdService = (id) => {
    return apiRequest({
        method: METHOD_GET,
        url: `${GET_PRODUCTS}/${id}`,
    });
}

const createProductService = (data) => {
    return apiRequest({
        method: METHOD_POST,
        url: CREATE_PRODUCTS,
        data
    });
}


const getCategoryService = () => {
    return apiRequest({
        method: METHOD_GET,
        url: CATEGORY_LIST
    });
}




const ProductService = {
    getProductListService,
    getProductByIdService,
    createProductService,
    getCategoryService
};

export default ProductService;