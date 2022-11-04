import { createContext, FC, ReactNode, useState, useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

import { api } from "../../api/axios";
import { authenticateUser } from "../../api/authenticateUser";
import { getMe } from "../../api/getMe";

WebBrowser.maybeCompleteAuthSession();

export type User = {
  name: string;
  avatarUrl: string;
};

export type AuthContextType = {
  user: User;
  isLoadingUser: boolean;
  signIn: () => Promise<void>;
};

export type AuthContextProviderType = {
  children?: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider: FC<AuthContextProviderType> = ({
  children,
}) => {
  const [user, setUser] = useState({} as User);
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "3908377347-b1f5eq13u2ka4h6ihoif09d3ihv3f88h.apps.googleusercontent.com",
    clientSecret: "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",
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ["profile", "email"],
  });

  const signIn = async () => {
    try {
      setIsLoadingUser(true);
      await promptAsync();
    } catch (error: any) {
      console.warn(error?.message);
      throw error;
    } finally {
      setIsLoadingUser(false);
    }
  };

  const signInWithGoogle = async (access_token: string) => {
    try {
      setIsLoadingUser(true);

      const {
        data: { token },
      } = await authenticateUser({ access_token });

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const {
        data: { user },
      } = await getMe();

      setUser({
        avatarUrl: user.avatarUrl,
        name: user.name,
      });
    } catch (error: any) {
      console.log(error);
      throw error;
    } finally {
      setIsLoadingUser(false);
    }
  };

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication?.accessToken);
    }
  }, [response]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoadingUser,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContextConsumer = AuthContext.Consumer;
