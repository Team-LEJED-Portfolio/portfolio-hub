import { apiClient, clearToken } from "./config"

export const apiSignup = async(payload)=>{
    return apiClient.post("/auth/signup",payload);

}

export const apiLogin = async(payload)=>{
    return apiClient.post("/auth/token/login",payload);
}
export const apiLogout = async () => {
    clearToken()
  };
  

export const apiCheckUsernameExists = async(userName)=>{
    return apiClient.get(`/auth/${userName}`);
}
