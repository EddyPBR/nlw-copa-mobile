import { Image, IImageProps } from "native-base";
import { FC } from "react";

export const Flag: FC<IImageProps> = ({ ...props }: IImageProps) => {
  return <Image {...props} alt="Bandeira" w={8} h={6} mx={3} />;
};
