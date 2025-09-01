import type { FormAction, FormDataType } from "@/types";
import { createContext } from "react";

interface FormContextType {
	state: FormDataType;
	dispatch: React.Dispatch<FormAction>;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);
