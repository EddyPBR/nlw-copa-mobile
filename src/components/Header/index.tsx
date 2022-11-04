import { useNavigation } from "@react-navigation/native";
import { Text, HStack, Box } from "native-base";
import { CaretLeft, Export } from "phosphor-react-native";
import { FC } from "react";

import { ButtonIcon } from "../ButtonIcon";

export type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  showShareButton?: boolean;
};

export const Header: FC<HeaderProps> = ({
  title,
  showBackButton = false,
  showShareButton = false,
}) => {
  const { navigate } = useNavigation();

  const EmptyBoxSpace = () => <Box w={6} h={6} />;

  return (
    <HStack
      w="full"
      h={24}
      bgColor="gray.800"
      alignItems="flex-end"
      pb={5}
      px={5}
    >
      <HStack w="full" alignItems="center" justifyContent="space-between">
        {showBackButton ? (
          <ButtonIcon icon={CaretLeft} onPress={() => navigate("pools")} />
        ) : (
          <EmptyBoxSpace />
        )}

        <Text
          color="white"
          fontFamily="medium"
          fontSize="md"
          textAlign="center"
        >
          {title}
        </Text>

        {showShareButton ? <ButtonIcon icon={Export} /> : <EmptyBoxSpace />}
      </HStack>
    </HStack>
  );
};
