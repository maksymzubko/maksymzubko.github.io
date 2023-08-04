import {createContext} from "react";

export const GlobalContext = createContext({
    isMobile: false,
    currentHash: "",
})