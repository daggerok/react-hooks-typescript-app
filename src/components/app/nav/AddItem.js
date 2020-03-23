import React, { useRef } from 'react';
import { useApplicationContext } from '../../../state/provider';

export function AddItem() {
  const ref = useRef();
  const { state, dispatch, actionTypes, actionCreators } = useApplicationContext();
  const setAction = actionCreators[actionTypes.set];
  const addAction = actionCreators[actionTypes.add];
  const onChangeHandler = (e) => dispatch(setAction(e.target.value));
  const onSubmitHandler = ({ key, target }) => {
    if ('Enter' !== key) return;
    dispatch(addAction(state.current));
    target.value = '';
    onChangeHandler({ target });
  };

  return (
    <input
      ref={ref}
      onChange={onChangeHandler}
      onKeyPress={onSubmitHandler}
    />
  );
}
