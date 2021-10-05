import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { VFC, useState } from "react";
import { PopoverItem } from "src/components/PopoverItem";
import { contents } from "src/lib/data";

export const PopoverList: VFC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepForward = () => setCurrentStep(currentStep + 1);

  return (
    <Box mt="10">
      {contents.map((content, index) => (
        <PopoverItem
          key={index}
          step={index + 1}
          currentStep={currentStep}
          stepForward={stepForward}
          length={contents.length}
          content={content}
        >
          <Button width="200px" bg="blue.300" color="white">
            {content.title}
          </Button>
        </PopoverItem>
      ))}
      <Text mt="10">リロードするともう一度出ます。</Text>
    </Box>
  );
};
