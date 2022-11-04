import { api, apiException } from "./axios";

export type AuthenticateUserBody = {
  access_token: string;
};

export type AuthenticateUserResponse = {
  token: string;
};

export const authenticateUser = async (body: AuthenticateUserBody) => {
  try {
    return await api.post<AuthenticateUserResponse>("/users", body);
  } catch (error: any) {
    throw apiException(error);
  }
};
