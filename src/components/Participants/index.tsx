import { Avatar, Center, HStack, Text } from "native-base";
import { FC } from "react";
import { PoolParticipant } from "../../api/getPools";

export type ParticipantsProps = {
  participants: PoolParticipant[];
  count: number;
};

export const Participants: FC<ParticipantsProps> = ({
  participants,
  count,
}) => {
  return (
    <HStack>
      {participants &&
        participants.map((participant) => (
          <Avatar
            key={participant.id}
            source={{ uri: participant.user.avatarUrl }}
            w={8}
            h={8}
            rounded="full"
            borderWidth={2}
            marginRight={-3}
            borderColor="gray.800"
          >
            {/* {participant.user.name.at(0).toUpperCase()} */}
          </Avatar>
        ))}

      <Center
        w={8}
        h={8}
        bgColor="gray.700"
        rounded="full"
        borderWidth={1}
        borderColor="gray.800"
      >
        <Text color="gray.100" fontSize="xs" fontFamily="medium">
          {count ? `+${count}` : 0}
        </Text>
      </Center>
    </HStack>
  );
};
