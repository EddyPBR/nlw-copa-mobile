import { api, apiException } from "./axios";

export type CreatePoolBody = {
  title: string;
};

export const createPool = async (body: CreatePoolBody) => {
  try {
    return await api.post<void>("/pools", body);
  } catch (error: any) {
    throw apiException(error);
  }
};
