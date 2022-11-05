import { FC, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import { HStack, useToast, VStack } from "native-base";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Option } from "../../components/Option";
import { findPool, FindPoolType } from "../../api/findPool";
import { PoolHeader } from "../../components/PoolHeader";
import { EmptyMyPoolList } from "../../components/EmptyMyPoolList";

type RouteParams = {
  id: string;
};

export const Details: FC = () => {
  const toast = useToast();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const [pool, setPool] = useState<FindPoolType | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [optionSelected, setOptionSelected] = useState<"GUESSES" | "RANKING">(
    "GUESSES"
  );

  const fetchPoolDetails = async () => {
    try {
      setIsLoading(true);

      const {
        data: { pool },
      } = await findPool({ id });

      if (!pool) {
        toast.show({
          title: "Bolão não encontrado",
          placement: "top",
          bgColor: "red.500",
        });
      }

      setPool(pool);
    } catch (error: any) {
      console.log(error);

      toast.show({
        title: error?.message,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPoolDetails();
  }, [id]);

  if (isLoading || !pool) {
    return <Loading />;
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title={pool.title} showBackButton showShareButton />

      {pool._count.participants > 0 ? (
        <VStack px={5} flex={1}>
          <PoolHeader data={pool} />

          <HStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
            <Option
              title="Seus palpites"
              isSelected={optionSelected === "GUESSES"}
              onPress={() => setOptionSelected("GUESSES")}
            />
            <Option
              title="Ranking do grupo"
              isSelected={optionSelected === "RANKING"}
              onPress={() => setOptionSelected("RANKING")}
            />
          </HStack>
        </VStack>
      ) : (
        <EmptyMyPoolList code={pool.code} />
      )}
    </VStack>
  );
};
