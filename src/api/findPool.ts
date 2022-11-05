import { api, apiException } from "./axios";

export type FindPoolOwner = {
  id: string;
  name: string;
};

export type FindPoolParticipant = {
  id: string;
  user: {
    name: string;
    avatarUrl: string | null;
  };
};

export type FindPoolType = {
  id: string;
  code: string;
  owner: FindPoolOwner | null;
  ownerId: string | null;
  title: string;
  createdAt: string;
  participants: FindPoolParticipant[];
  _count: {
    participants: number;
  };
};

export type FindPoolPathParams = {
  id: string;
};

export type FindPoolResponse = {
  pool: FindPoolType | null;
};

export const findPool = async (params: FindPoolPathParams) => {
  try {
    return await api.get<FindPoolResponse>(`/pools/${params.id}`);
  } catch (error: any) {
    throw apiException(error);
  }
};
