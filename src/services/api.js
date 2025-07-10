
const BASE_URL = 'https://dummyjson.com';

export const getAllItems = async() =>{
    const response= await fetch(`${BASE_URL}/products`);
    const data= await response.json()
    return data.products
};



export const searchItems = async (query) => {
    const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
    const data = await response.json();
    return data.products; 
};
