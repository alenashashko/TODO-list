import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
  task: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  text: {
    wordBreak: "break-word",
    whiteSpace: "pre-wrap"
  },
  footer: {
    marginTop: "auto"
  },
  footerContainer: {
    display: "flex",
    alignItems: "flex-end",

    width: "100%",
    padding: "8px"
  },
  buttons: {
    marginLeft: "auto"
  }
});
