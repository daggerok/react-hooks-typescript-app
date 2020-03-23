import React, { useContext, useReducer } from 'react';

// PRIVATE API:

const actionTypes = {
  add: 'add',
  set: 'set',
  reverse: 'reverse',
};

const actionCreators = {
  [actionTypes.set]:
    value => ({
      type: actionTypes.set,
      payload: value,
    }),
  [actionTypes.add]:
    item => ({
      type: actionTypes.add,
      payload: item,
    }),
  [actionTypes.reverse]:
    () => ({
      type: actionTypes.reverse,
    }),
};

const reducer = (state, action) => {
  console.log('state', state, 'action', action);
  switch (action.type) {
    case actionTypes.set:
      return {
        ...state,
        current: action.payload,
      };
    case actionTypes.add:
      return {
        ...state,
        items: [
          { value: action.payload, },
          ...state.items,
        ],
      };
    case actionTypes.reverse:
      return {
        ...state,
        items: state.items.reverse(),
      };
    default:
      return { ...state };
  }
};

const initialState = {
  items: [],
  current: null,
};

const ApplicationContext = React.createContext(initialState);

// PUBLIC API:

/*
 * Use this provider to wrap whole react app in ReactDOM.render function.
 *
 * ReactDOM.render(
 *   <ApplicationContextProvider>
 *     <!-- my app ... -->
 *   </ApplicationContextProvider>,
 *   document.querySelector('#my-app')
 * );
 */
export function ApplicationContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, arg => arg);
  return (
    <ApplicationContext.Provider value={{
      actionCreators,
      actionTypes,
      dispatch,
      state,
    }}>
      {children}
    </ApplicationContext.Provider>
  );
}

/*
 * Use this hook for components dependency injection with global state as application context.
 *
 * export function MyComponent() {
 *   // const { state, dispatch, actionCreators, actionTypes } = useApplicationContext();
 *   const { state } = useApplicationContext();
 *   return <p>{state.myParagraph}</p>
 * }
 */
export const useApplicationContext = () => useContext(ApplicationContext);
