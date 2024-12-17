"use client";

import axiosInstance from "@/lib/api/axiosInstance";
import React, { createContext, useContext, useState, useEffect } from "react";

// Define the shape of the context

// Create the context with a default value
const MyContext = createContext(undefined);

// Create a provider component

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]); // Replace `any` with the actual data type if known
  const [language, setLanguage] = useState("en");

  // Fetch data from the endpoint and set it in the context
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("home"); // Replace with your actual endpoint
        const data = response.data.data;
        console.log("🚀 ~ fetchUserData ~ data:", data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Provide the context value to children
  return (
    <MyContext.Provider
      value={{
        data,
        setLanguage: React.Dispatch < React.SetStateAction,
        language,
      }}
    >
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
