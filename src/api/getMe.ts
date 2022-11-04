import { api, apiException } from "./axios";

export type GetMeResponse = {
  user: {
    name: string;
    avatarUrl?: string;
    exp: string;
    iat: string;
    sub: string;
  };
};

export const getMe = async () => {
  try {
    return await api.get<GetMeResponse>("/me");
  } catch (error: any) {
    throw apiException(error);
  }
};
