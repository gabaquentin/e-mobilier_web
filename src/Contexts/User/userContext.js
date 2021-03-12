import React from "react";
import { Reducer, InitialState } from "./reducer";

export const UserContext = React.createContext({
    state: InitialState,
    dispatch: () => null
})

export const UserProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(Reducer, InitialState())

    return (
        <UserContext.Provider value={[state, dispatch]}>
            { children}
        </UserContext.Provider>
    )
}