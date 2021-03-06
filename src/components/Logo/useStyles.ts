import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root_logo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "none",
      textDecoration: "none",
      "&:focus, &:hover, &:visited, &:link, &:active": {
        color: "#fff",
      },
    },
    left_part: {
      borderRadius: 10,
      backgroundColor: "#007fff",
      padding: 5,
      fontSize: 35,
      marginRight: 10,
    },
    right_part: {
      fontSize: 35,
      fontWeight: 200,
    },
  })
);

export default useStyles;
