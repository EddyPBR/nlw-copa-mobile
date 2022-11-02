import { Center, Text } from "native-base";
import { FC } from "react";

export const SignIn: FC = () => {
  return (
    <Center flex={1} bgColor="gray.900">
      <Text color="white" fontSize={24} fontFamily="heading">
        Hello React Native!
      </Text>
    </Center>
  );
};
