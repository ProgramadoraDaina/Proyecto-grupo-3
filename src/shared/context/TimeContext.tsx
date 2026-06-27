import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// 1. Creamos el contexto
const TimeContext = createContext({ totalTime: 0 });

// 2. Provider que va a envolver la app
export const TimeProvider = ({ children }: { children: ReactNode }) => {
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <TimeContext.Provider value={{ totalTime }}>
      {children}
    </TimeContext.Provider>
  );
};

// 3. Hook para usarlo
export const useTime = () => useContext(TimeContext);