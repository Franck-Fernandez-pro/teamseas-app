import { Box, Button, VStack } from '@chakra-ui/react';
import { memo, useCallback, useMemo, useState } from 'react';

interface Props {}

function DonationWizard({}: Props) {
  const [step, setStep] = useState<number>(0);

  const pages = useMemo(
    () => [<div key={0}>Page 1</div>, <div key={1}>Page 2</div>],
    []
  );

  const next = useCallback(
    () => setStep((s) => (s >= pages.length - 1 ? pages.length - 1 : s + 1)),
    [pages]
  );

  const prev = useCallback(() => setStep((s) => (s <= 0 ? 0 : s - 1)), []);

  return (
    <Box
      boxShadow="xl"
      p={8}
      borderRadius="xl"
      minW="sm"
      bgColor="wheat"
      color="gray.800"
    >
      {pages[step]}

      <VStack spacing={2}>
        <Button
          isFullWidth
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          onClick={next}
        >
          Next
        </Button>
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
      </VStack>
    </Box>
  );
}

export default memo(DonationWizard);
