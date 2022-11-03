import { FC } from "react";

import { Button as NativeBaseButton, Text, IButtonProps } from "native-base";

export type ButtonProps = IButtonProps & {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
};

export const Button: FC<ButtonProps> = ({
  title,
  type = "PRIMARY",
  ...props
}) => {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      bg={type === "SECONDARY" ? "red.500" : "yellow.500"}
      _pressed={{
        bg: type === "SECONDARY" ? "red.600" : "yellow.600",
      }}
      _loading={{
        _spinner: { color: "black" },
      }}
      {...props}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={type === "SECONDARY" ? "white" : "black"}
        textTransform="uppercase"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
};
