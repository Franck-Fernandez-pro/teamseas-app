import { gql } from '@apollo/client';
import { Box, Grid, Heading, VStack, Text } from '@chakra-ui/react';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import client from '../apollo-client';
import Counter from '../components/Counter';

const TOTAL_DONATIONS_QUERY = gql`
  query Donations {
    totalDonations
  }
`;

// ! subscription doesn't work
// const TOTAL_UPDATED_SUBSCRIPTION = gql`
//   subscription TotalUpdatedSubscription {
//     totalUpdated {
//       total
//     }
//   }
// `;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({ query: TOTAL_DONATIONS_QUERY });

  return {
    props: {
      totalDonations: data.totalDonations,
    },
  };
};

const Home: NextPage = ({ totalDonations }) => {
  console.log('🚀 ~ totalDonations', totalDonations);

  return (
    <main>
      <Head>
        <title>Teamseas app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Image
              src="/logo.png"
              alt="Teamseas Logo"
              width={486}
              height={216}
            />
            <Heading as="h1" size="xl">
              {'Join the movement'.toUpperCase()}
            </Heading>
            <Text fontWeight="light">
              The team is growing everyday and scoring wins for the planet.
              Plant with us and track our progress
            </Text>

            <Heading as="h2" size="4xl">
              <Counter from={0} to={totalDonations} />
            </Heading>
          </VStack>
        </Grid>
      </Box>
    </main>
  );
};

export default Home;
