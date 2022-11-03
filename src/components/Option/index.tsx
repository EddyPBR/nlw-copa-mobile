import { Center, Text, Pressable, IPressableProps } from "native-base";
import { FC } from "react";

export type OptionProps = IPressableProps & {
  title: string;
  isSelected: boolean;
};

export const Option: FC<OptionProps> = ({
  title,
  isSelected = false,
  ...rest
}) => {
  return (
    <Pressable flex={1} h={7} maxH={7} {...rest}>
      <Center
        h="full"
        w="full"
        bgColor={isSelected ? "gray.600" : "transparent"}
        rounded="sm"
      >
        <Text color="gray.100" fontFamily="heading" fontSize="xs">
          {title}
        </Text>
      </Center>
    </Pressable>
  );
};
