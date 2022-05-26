import React, {useReducer} from 'react';

//função genérica que recebe um reducer e um estado inicial
//e retorna um array com o estado e uma função para disparar as ações
//que alteram o estado
//função generica que cria um contexto.

export default (reducer, actions, initialState)=>{
  const Context = React.createContext();

const Provider = ({children})=>{
  const [state,dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{state}}>
    {children}
    </Context.Provider>
)}
return {Context, Provider};
}