import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    customGreen: {
      500: "#4F9B3F",
    },
    newCustomGreen: {
      600: "#079073"
    },
    customBlack: {
      700: "#0E3239"
    }
  },
});

export default theme;