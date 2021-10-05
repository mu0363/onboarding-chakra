import { Button } from "@chakra-ui/button";
import { VFC, useState } from "react";
import { PopoverItem } from "src/components/PopoverItem";
import { contents } from "src/lib/data";

export const PopoverList: VFC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepForward = () => setCurrentStep(currentStep + 1);

  return (
    <div>
      <p>リロードするともう一度出ます。</p>
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
    </div>
  );
};
