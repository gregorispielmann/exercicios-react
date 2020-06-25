import { createStore, combineReducers } from 'redux'
// apenas configuramos o redux aqui... no index.js que iremos integrar react com o redux

// combineReducers: pega todos os reducer para dai gerar a store

import numerosReducer from './reducers/numeros'

// chave, valor(função)
const reducers = combineReducers({
    numeros: numerosReducer
})


// cria a store com os reducers
function storeConfig() {
    return createStore(reducers)
}

export default storeConfig