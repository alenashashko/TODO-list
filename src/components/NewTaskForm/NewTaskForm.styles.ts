import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginBottom: `${theme.spacing(4)}px`,
    },
    stretch: {
      width: "100%",
    },
  })
);
