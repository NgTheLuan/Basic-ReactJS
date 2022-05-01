import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useReducer, useRef } from "react";

function Todo() {
  // 1. InitialState
  const initialState = {
    job: "",
    jobs: [],
  };

  // 2. Actions
  const SET_JOB = "set_job";
  const ADD_JOB = "add_job";
  const DELETE_JOB = "delete_job";

  const setJob = (payload) => {
    return {
      type: SET_JOB,
      payload,
    };
  };

  const addJob = (payload) => {
    return {
      type: ADD_JOB,
      payload,
    };
  };

  const deleteJob = (payload) => {
    return {
      type: DELETE_JOB,
      payload,
    };
  };

  // 3. Reducer
  const reducer = (state, action) => {
    let newState;
    switch (action.type) {
      case SET_JOB:
        newState = {
          ...state,
          job: action.payload,
        };
        break;

      case ADD_JOB: {
        newState = {
          ...state,
          jobs: [...state.jobs, action.payload],
        };
        break;
      }

      case DELETE_JOB: {
        // clone new array
        const newJob = [...state.jobs];
        // delete 1 element
        newJob.splice(action.payload, 1);
        // set newJob on jobs
        newState = {
          ...state,
          jobs: newJob,
        };
        break;
      }

      default:
        throw new Error("Invalid action");
    }
    return newState;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    // Auto focus textfield when submit and clear
    inputRef.current.focus();
  };

  return (
    <React.Fragment>
      <h3>Todo List 🥴</h3>
      <TextField
        id="outlined-basic"
        label="To do something ..."
        variant="outlined"
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
        inputRef={inputRef}
      />

      <Button variant="contained" style={{ margin: 10 }} onClick={handleSubmit}>
        Add new
      </Button>

      <ul>
        {jobs.map((value, index) => {
          return (
            <li key={index}>
              {value}
              <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default Todo;
