import { formReducer, initialFormState } from "@/reducers/formReducer";
import { useReducer } from "react";
import { FormContext } from "./FormAction";

export function FormProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(formReducer, initialFormState);

	return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
}
