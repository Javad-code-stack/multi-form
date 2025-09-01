import type { FormDataType, FormAction } from "@/types";

export const initialFormState: FormDataType = {
	personalInfo: { firstName: "", lastName: "", email: "", date: new Date() },
	address: { street: "", city: "", cState: "", code: "" },
	preferences: { newsLetter: true, notifications: false, theme: "light" },
};

export function formReducer(state = initialFormState, action: FormAction): FormDataType {
	switch (action.type) {
		case "UPDATE_PERSONAL_INFO":
			return {
				...state,
				personalInfo: {
					...state.personalInfo,
					...action.payload,
				},
			};
		case "UPDATE_ADDRESS_INFO":
			return {
				...state,
				address: {
					...state.address,
					...action.payload,
				},
			};
		case "UPDATE_PREFERENCES_INFO":
			return {
				...state,
				preferences: {
					...state.preferences,
					...action.payload,
				},
			};
		case "RESET_FORM":
			return initialFormState;

		default:
			return state;
	}
}
