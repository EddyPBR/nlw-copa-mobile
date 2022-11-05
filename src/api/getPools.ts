import { api, apiException } from "./axios";

export type PoolOwner = {
  id: string;
  name: string;
};

export type PoolParticipant = {
  id: string;
  user: {
    name: string;
    avatarUrl: string | null;
  };
};

export type PoolType = {
  id: string;
  code: string;
  owner: PoolOwner | null;
  ownerId: string | null;
  title: string;
  createdAt: string;
  participants: PoolParticipant[];
  _count: {
    participants: number;
  };
};

export type GetPoolsResponse = {
  pools: PoolType[];
};

export const getPools = async () => {
  try {
    return await api.get<GetPoolsResponse>("/pools");
  } catch (error: any) {
    throw apiException(error);
  }
};
