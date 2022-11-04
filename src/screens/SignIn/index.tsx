import type { FC } from "react";

import { useAuth } from "../../hooks/useAuth";

import { Center, Icon, Text } from "native-base";
import { Fontisto } from "@expo/vector-icons";
import { Button } from "../../components/Button";

import Logo from "../../assets/logo.svg";

export const SignIn: FC = () => {
  const { signIn, isLoadingUser } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />

      <Button
        title="Entrar com Google"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        type="SECONDARY"
        mt={12}
        onPress={signIn}
        isLoading={isLoadingUser}
      />

      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {"\n"}
        do seu e-mail para criação da sua conta.
      </Text>
    </Center>
  );
};
