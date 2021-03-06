import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content_box: {
      width: "90%",
      margin: "3% auto",
    },
    filter_pannel: {
      width: 200,
    },
  })
);

export default useStyles;
