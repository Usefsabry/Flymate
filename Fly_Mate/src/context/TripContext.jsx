import { createContext, useContext, useState, useEffect } from "react";

const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [tripCount, setTripCount] = useState(0);

  // تحديث عدد الرحلات من localStorage أول ما الصفحة تفتح
  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem("myTrips")) || [];
    setTripCount(trips.length);
  }, []);

  return (
    <TripContext.Provider value={{ tripCount, setTripCount }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrips = () => useContext(TripContext);
