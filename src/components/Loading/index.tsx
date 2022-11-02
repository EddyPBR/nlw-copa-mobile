import { Center, Spinner } from "native-base";
import { FC } from "react";

export const Loading: FC = () => {
  return (
    <Center flex={1} bg="gray.900">
      <Spinner color="yellow.500" />
    </Center>
  );
};
