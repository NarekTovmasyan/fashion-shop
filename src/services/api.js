
import { apiURL } from "../config";

// export async function getData(){
//     const response=await fetch(`${apiURL}product`);
//     const data=await response.json();
//     return data;
// }

export async function getProducts(){
    const response = await fetch(`${apiURL}product`)
    const data = await response.json();
    return data;
}