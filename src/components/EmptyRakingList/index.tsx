import { Text } from "native-base";
import { FC } from "react";

export const EmptyRakingList: FC = () => {
  return (
    <Text color="white" fontSize="sm" textAlign="center">
      O ranking desse bolão ainda não foi {"\n"}
      formado, aguarde os resultados.
    </Text>
  );
};
