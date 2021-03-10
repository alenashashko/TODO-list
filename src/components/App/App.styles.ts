import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      display: "flex",
      flexDirection: "column",

      height: "100%",
    },
    mainContainer: {
      flexGrow: 1,

      paddingTop: `${theme.spacing(6)}px`,
      paddingBottom: `${theme.spacing(6)}px`,
    },
  })
);
