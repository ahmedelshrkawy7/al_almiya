"use client";

import axiosInstance from "@/lib/api/axiosInstance";
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context with a default value of undefined
const MyContext = createContext(undefined);

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]); // Replace with the actual data type if known
  const [language, setLanguage] = useState("en");

  // Fetch data from the endpoint and set it in the context
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("home", {
          headers: { "Accept-Language": language },
        }); // Replace with your actual endpoint
        const data = response.data.data;
        console.log("🚀 ~ fetchUserData ~ data:", data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [language]);

  // Provide the context value to children
  return (
    <MyContext.Provider value={{ data, setLanguage, language }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export const useMyContext = () => {
  const context = useContext(MyContext);

  // Throw an error if the hook is used outside the provider
  if (context === undefined) {
    throw new Error("useMyContext must be used within MyContextProvider");
  }

  return context;
};
