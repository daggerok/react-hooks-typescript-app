import React from 'react';
import { useApplicationContext } from '../../state/provider';
import { Item } from './container/Item';

export function Container() {
  const { state, dispatch, actionTypes, actionCreators } = useApplicationContext();
  const reverseAction = actionCreators[actionTypes.reverse];
  const onClickHandler = () => dispatch(reverseAction());

  return <div id="container" onClick={onClickHandler}>
    {state.items.map((item, index) =>
      <Item
        key={index}
        item={item}
      />
    )}
  </div>;
}
