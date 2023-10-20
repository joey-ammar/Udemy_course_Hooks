import { useContext } from "react";
import { createContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const AppContext = ({ children }) => {
  const [name, setNmae] = useState("peter");
  return (
    <GlobalContext.Provider value={{ name, setNmae }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
