import { memo } from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import LeaderBoardItem from './LeaderBoardItem';

interface Props {}

function LeaderBoard({}: Props) {
  return (
    <Box w="100%">
      <Heading>LeaderBoard</Heading>

      <VStack spacing={4}>
        <LeaderBoardItem
          donation={{
            id: 12,
            count: 200,
            displayName: 'Toto',
            email: 'toto@gmail.com',
            mobile: 'mobile',
            team: 'team',
            message: 'message',
            createdAt: "2022-02-24T14:24:08.311Z",
          }}
        />
        <LeaderBoardItem
          donation={{
            id: 12,
            count: 200,
            displayName: 'Toto',
            email: 'toto@gmail.com',
            mobile: 'mobile',
            team: 'team',
            message: 'message',
            createdAt: "2022-02-24T14:24:08.311Z",
          }}
        />
        <LeaderBoardItem
          donation={{
            id: 12,
            count: 200,
            displayName: 'Toto',
            email: 'toto@gmail.com',
            mobile: 'mobile',
            team: 'team',
            message: 'message',
            createdAt: "2022-02-24T14:24:08.311Z",
          }}
        />
        <LeaderBoardItem
          donation={{
            id: 12,
            count: 200,
            displayName: 'Toto',
            email: 'toto@gmail.com',
            mobile: 'mobile',
            team: 'team',
            message: 'message',
            createdAt: "2022-02-24T14:24:08.311Z",
          }}
        />
      </VStack>
    </Box>
  );
}

export default memo(LeaderBoard);
