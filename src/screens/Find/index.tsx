import { Heading, useToast, VStack } from "native-base";
import { FC, useState } from "react";
import { Header } from "../../components/Header";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { joinPool } from "../../api/joinPool";
import { useNavigation } from "@react-navigation/native";

export const Find: FC = () => {
  const toast = useToast();
  const { navigate } = useNavigation();

  const [code, setCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleJoinPool = async () => {
    try {
      if (!code.trim()) throw new Error("Informe um código válido do bolão");

      setIsLoading(true);

      await joinPool({ code });

      toast.show({
        title: "Você entrou no bolão",
        placement: "top",
        bgColor: "green.500",
      });

      navigate("pools");
    } catch (error: any) {
      console.log(error);

      toast.show({
        title: error?.message,
        placement: "top",
        bgColor: "red.500",
      });

      setIsLoading(false);
    }
  };

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mb={8}
          textAlign="center"
        >
          Encontre um bolão através de {"\n"} seu código único
        </Heading>

        <Input
          mb={2}
          placeholder="Qual o código do bolão?"
          onChangeText={setCode}
          autoCapitalize="characters"
        />

        <Button
          title="BUSCAR BOLÃO"
          onPress={handleJoinPool}
          isLoading={isLoading}
        />
      </VStack>
    </VStack>
  );
};
