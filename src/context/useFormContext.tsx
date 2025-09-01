import { useContext } from "react";
import { FormContext } from "./FormAction";

export function useFormContext() {
	const context = useContext(FormContext);

	if (context === undefined) {
		throw new Error("useFormContext error");
	}

	return context;
}
