import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
  wrap: {
    display: "flex",
    flexDirection: "column",

    height: "100%"
  },
  mainContainer: {
    flexGrow: 1,

    padding: "24px 0"
  }
});
