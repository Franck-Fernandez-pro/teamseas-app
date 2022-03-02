import { Key, memo, useState } from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import LeaderBoardItem from './LeaderBoardItem';
import { gql, useQuery } from '@apollo/client';
import { Donation, Donations } from '../../types';

const DONATIONS_QUERY = gql`
  query Donations($orderBy: OrderByParams) {
    donations(orderBy: $orderBy) {
      id
      count
      displayName
      team
      message
      createdAt
    }
  }
`;

interface QueryVariable {
  orderBy: {
    field: string;
    direction: string;
  };
}

interface Props {}

function LeaderBoard({}: Props) {
  const [field, setField] = useState<string>('createdAt');
  const { data, error, loading } = useQuery<Donations, QueryVariable>(
    DONATIONS_QUERY,
    {
      variables: {
        orderBy: {
          field,
          direction: 'asc',
        },
      },
    }
  );

  if (error) return <div>Something went wrong...</div>;
  if (loading || !data) return <div>Loading...</div>;

  return (
    <Box w="100%">
      <Heading>LeaderBoard</Heading>

      <VStack spacing={4}>
        {data?.donations &&
          data.donations.map((donation: Donation, idx: Key) => (
            <LeaderBoardItem key={idx} donation={donation} />
          ))}
      </VStack>
    </Box>
  );
}

export default memo(LeaderBoard);
