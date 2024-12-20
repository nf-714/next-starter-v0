import { ILoginCredentials, IRegisterCredentials } from "@/type/type";
import { axiosInstance } from "./axios";

export const login = async (credentials: ILoginCredentials) => {
  const response = await axiosInstance.post(
    "/api/auth/sign-in/email",
    credentials
  );

  return response;
};

export const register = async (credentials: IRegisterCredentials) => {
  const response = await axiosInstance.post(
    "/api/auth/sign-up/email",
    credentials
  );

  return response;
};

export const getSession = async (credentials: IRegisterCredentials) => {
  const response = await axiosInstance.get("/api/auth/get-session");

  return response;
};

export const verifyUser = async () => {};
