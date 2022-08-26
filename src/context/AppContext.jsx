import React, { createContext } from 'react'

const AppContext = createContext({});
function AppContextProvider({children}) {
  
  return (
    <AppContext.Provider>{children}</AppContext.Provider>
  )
}

export default AppContext