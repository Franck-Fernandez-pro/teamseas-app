import { Box, Button } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import CountSelection from './CountSelection';

interface Props {}

function DonationWizard({}: Props) {
  const [step, setStep] = useState<number>(0);
  const [donationDetails, setDonationDetails] = useState({
    count: 20,
  });

  const next = useCallback((value: any = {}) => {
    setDonationDetails((d) => ({ ...d, ...value }));
    setStep((s) => (s >= pages.length - 1 ? pages.length - 1 : s + 1));
  }, []);

  const pages: ReactJSXElement[] = useMemo(
    () => [
      <CountSelection
        key={0}
        next={next}
        initialCount={donationDetails.count}
      />,
      <div key={1}>Page 2</div>,
    ],
    [donationDetails.count, next]
  );

  const prev = useCallback(() => setStep((s) => (s <= 0 ? 0 : s - 1)), []);

  return (
    <Box
      boxShadow="xl"
      p={8}
      borderRadius="xl"
      minW="sm"
      bgColor="blue.700"
      color="gray.200"
    >
      {pages[step]}
      <Button
        isFullWidth
        colorScheme="blue"
        variant="ghost"
        size="lg"
        borderRadius="full"
        onClick={prev}
      >
        Previous
      </Button>
    </Box>
  );
}

export default memo(DonationWizard);
