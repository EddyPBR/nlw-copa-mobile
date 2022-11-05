import { api, apiException } from "./axios";

export type JoinPoolBody = {
  code: string;
};

export const joinPool = async (body: JoinPoolBody) => {
  try {
    return await api.post<void>("/pools/join", body);
  } catch (error: any) {
    throw apiException(error);
  }
};
