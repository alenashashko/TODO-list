import {FC} from "react";
import {createMuiTheme, ThemeProvider, CssBaseline} from "@material-ui/core";

const fullHeight = {
  minHeight: "100%",
  height: "100%"
};

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: fullHeight,
        body: fullHeight,
        "#root": fullHeight,
      },
    },
  },
});

export const GlobalTheme: FC = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        {children}
    </ThemeProvider>
  );
};
