import { apiURL } from "../config";

// export async function getData(){
//     const response=await fetch(`${apiURL}product`);
//     const data=await response.json();
//     return data;
// }

export async function getProducts() {
  const response = await fetch(`${apiURL}product`);
  const data = await response.json();
  return data;
}

export async function getOrders(user_id,token) {    
      console.log(user_id,token);

  const response = await fetch(`${apiURL}order/user-order`, {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`,
        user_id:user_id
      }
    // body: JSON.stringify(user_id),
  });
  console.log("response",response);
}

export async function authoriseUser() {}
