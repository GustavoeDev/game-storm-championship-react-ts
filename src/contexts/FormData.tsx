import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface RegistrationData {
  name: string;
  user: string;
  game: string;
}

interface FormDataContextType {
  dataRegistration: RegistrationData | null;
  createRegistrationData: (prop: RegistrationData) => void;
}

export const FormDataContext = createContext({} as FormDataContextType);

interface FormDataProps {
  children: ReactNode;
}

export function FormData({ children }: FormDataProps) {
  const [dataRegistration, setDataRegistration] =
    useState<RegistrationData | null>(null);

  const navigate = useNavigate();

  function createRegistrationData(data: RegistrationData) {
    setDataRegistration(data);
    navigate("/success");
    console.log(data);
  }

  return (
    <FormDataContext.Provider
      value={{ dataRegistration, createRegistrationData }}
    >
      {children}
    </FormDataContext.Provider>
  );
}
