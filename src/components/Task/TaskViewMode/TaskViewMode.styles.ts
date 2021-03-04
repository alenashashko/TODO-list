import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
  text: {
    wordBreak: "break-word",
    whiteSpace: "pre-wrap"
  },
  footer: {
    display: "flex",
    alignItems: "flex-end",

    width: "100%",
    padding: "8px"
  },
  buttons: {
    marginLeft: "auto"
  },
});
