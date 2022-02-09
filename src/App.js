import { useReducer } from 'react';
import { Component } from './components/Component';
import { StoreContext } from './context/context';
import { reducer, initialState } from './store/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ count: state.count, dispatch }}>
      <div className='state'>{state.count}</div>
      <div className='wrapper'>
        <Component title='A' />
        <Component title='B' />
        <Component title='C' />
      </div>
    </StoreContext.Provider >
  );
}

export default App;
