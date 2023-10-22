import { useState, useReducer } from "react";
import { data } from "../data";
import { RESET_LIST, REMOVE_ITEM, RECREAT_LIST } from "./actions";
import reducer from "./reducer";

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const setPeople = () => {
    dispatch({ type: RESET_LIST });
  };

  const resetList = () => {
    dispatch({ type: RECREAT_LIST });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => setPeople([])}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => resetList()}
        >
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
