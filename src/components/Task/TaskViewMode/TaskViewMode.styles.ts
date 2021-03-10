import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    task: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    text: {
      wordBreak: "break-word",
      whiteSpace: "pre-wrap",
    },
    footer: {
      marginTop: "auto",
    },
    footerContainer: {
      display: "flex",
      alignItems: "flex-end",

      width: "100%",
      padding: `${theme.spacing(2)}px`,
    },
    buttons: {
      marginLeft: "auto",
    },
  })
);
