import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    task: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    content: {
      paddingTop: `${theme.spacing(3)}px`,
      paddingBottom: `${theme.spacing(3)}px`,
    },
    text: {
      width: "100%",

      "& textarea": {
        lineHeight: `${theme.spacing(6)}px`,
      },

      "& .MuiInputBase-multiline": {
        padding: `${theme.spacing(1)}px 0`,
      },
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
