import { VFC, ReactNode, useState } from "react";
import { Img } from "@chakra-ui/react";
import {
  Box,
  ButtonGroup,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  step: number;
  currentStep: number;
  stepForward: VoidFunction;
  length: number;
  content: {
    title: string;
    description: string;
  };
}

// Warning: Prop `id` did not match. Server: "popover-trigger-2" Client: "popover-trigger-4"
// エラーの解消方
// https://github.com/chakra-ui/chakra-ui/issues/4328

export const PopoverItem: VFC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { children, step, currentStep, stepForward, content, length } = props;

  return (
    <div>
      <Box mt="5">
        <Popover
          id={step.toString()}
          placement="right"
          closeOnBlur={false}
          isOpen={currentStep === step && isOpen ? true : false}
          openDelay={100}
        >
          <>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
              <PopoverHeader pt={4} fontWeight="bold" border="0">
                {content.title}
              </PopoverHeader>
              <PopoverArrow bg="blue.800" />
              <PopoverBody>{content.description}</PopoverBody>
              {length === currentStep ? (
                <Img src="/images/cat.gif" alt="he is a farmer" p={5} />
              ) : null}
              <PopoverFooter
                border="0"
                d="flex"
                alignItems="center"
                justifyContent="space-between"
                pb={4}
              >
                <Box fontSize="sm">{`Step ${step} of ${length}`}</Box>
                <ButtonGroup size="sm">
                  {length === currentStep ? null : (
                    <Button
                      color="white"
                      bg="blue.600"
                      onClick={() => setIsOpen(false)}
                    >
                      閉じる
                    </Button>
                  )}
                  <Button colorScheme="red" onClick={stepForward}>
                    {length === currentStep ? "始める" : "次へ"}
                  </Button>
                </ButtonGroup>
              </PopoverFooter>
            </PopoverContent>
          </>
        </Popover>
      </Box>
    </div>
  );
};
