import { FC, useState, useCallback } from "react";

import { VStack, Icon, useToast, FlatList } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { PoolCard } from "../../components/PoolCard";
import { Loading } from "../../components/Loading";

import { getPools, PoolType } from "../../api/getPools";
import { EmptyPoolList } from "../../components/EmptyPoolList";

export const Pools: FC = () => {
  const toast = useToast();

  const [pools, setPools] = useState<PoolType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { navigate } = useNavigation();

  const fetchPools = async () => {
    try {
      setIsLoading(true);

      const {
        data: { pools },
      } = await getPools();

      setPools(pools);
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

  useFocusEffect(
    useCallback(() => {
      fetchPools();
    }, [])
  );

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />

      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor="gray.600"
        pb={4}
        mb={4}
      >
        <Button
          title="BUSCAR BOLÃO POR CÓDIGO"
          leftIcon={
            <Icon as={Octicons} name="search" color="black" size="md" />
          }
          onPress={() => navigate("find")}
        />
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList<PoolType>
          data={pools}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PoolCard data={item} />}
          px={5}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 10 }}
          ListEmptyComponent={() => <EmptyPoolList />}
        />
      )}
    </VStack>
  );
};
