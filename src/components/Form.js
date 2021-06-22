import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";

const Form = ({ inputHandler, state, addToDoHandler }) => {
  return (
    <>
      <form onSubmit={addToDoHandler}>
        <TextField
          fullWidth={true}
          id="outlined-basic"
          value={state.inputText}
          onChange={inputHandler}
          name="inputText"
          label="Enter Task*"
          variant="outlined"
          error={state.error}
          helperText={state.error ? "This field is required" : ""}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<Icon>add</Icon>}
          size="large"
          className="add-button"
        >
          Add
        </Button>
      </form>
    </>
  );
};

export default Form;
