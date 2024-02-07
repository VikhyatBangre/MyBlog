import { myAxios } from "./helper";

const signUp=(user)=>{
    return myAxios
    .post()
    .then((response) => response.data);
};

export const loginUser=(loginDetails)=>{
    return myAxios
    .post('',loginDetails)
    .then((response)=>{return response.data})
}