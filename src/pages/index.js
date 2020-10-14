import { Divider, Heading, Stack } from "@chakra-ui/core";

import { ProbandoJavascript } from "../components/ProbandoJavascript";
import { ProbandoAPI } from "../components/ProbandoAPI";
import { ProbandoListas } from "../components/ProbandoListas";
import { ProbandoInput } from "../components/ProbandoInput";

export default function IndexPage() {
  return (
    <Stack spacing="45px" padding="10px">
      <Heading>Hello World info104</Heading>
      <Divider />
      <ProbandoJavascript />
      <Divider />
      <ProbandoAPI />
      <Divider />
      <ProbandoListas />
      <Divider />
      <ProbandoInput />
    </Stack>
  );
}
