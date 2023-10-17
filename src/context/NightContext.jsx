import { createContext, useContext, useState } from "react";

const NightContext = createContext();

export function NightContextProvider({ children }) {
  const [nightMod, setNightMod] = useState(false);

  const toggleNight = (e) => {
    setNightMod((prev) => !prev);
    console.log(nightMod);
  };

  return (
    <NightContext.Provider value={{ nightMod, toggleNight }}>
      {children}
    </NightContext.Provider>
  );
}

export function useNightContext() {
  return useContext(NightContext);
}
