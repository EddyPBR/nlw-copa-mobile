import { Input as NativeBaseInput, IInputProps } from "native-base";
import { FC } from "react";

export const Input: FC<IInputProps> = ({ ...props }) => {
  return (
    <NativeBaseInput
      bg="gray.800"
      h={14}
      px={4}
      borderColor="gray.600"
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.800",
        borderColor: "gray.600",
      }}
      {...props}
    />
  );
};
