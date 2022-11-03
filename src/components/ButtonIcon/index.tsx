import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { IconProps } from "phosphor-react-native";
import { useTheme } from "native-base";
import { FC } from "react";

export type ButtonIconProps = TouchableOpacityProps & {
  icon: FC<IconProps>;
};

export const ButtonIcon: FC<ButtonIconProps> = ({ icon: Icon, ...rest }) => {
  const { colors, sizes } = useTheme();

  return (
    <TouchableOpacity {...rest}>
      <Icon color={colors.gray[300]} size={sizes[6]} />
    </TouchableOpacity>
  );
};
