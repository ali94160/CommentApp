import { Fragment } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { postSelector, setModalOpen } from "../../store/post/post";

function CostumSnackbar() {
  const dispatch = useDispatch();
  const { message, openModal } = useSelector(postSelector);
  return (
    <Fragment>
      <Snackbar
        open={openModal}
        autoHideDuration={4000}
        onClose={() => dispatch(setModalOpen(false))}
      >
        <Alert
          onClose={() => dispatch(setModalOpen(false))}
          severity="error"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Fragment>
  );
}

export default CostumSnackbar;
