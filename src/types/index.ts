export interface FormDataType {
	personalInfo: { firstName: string; lastName: string; email: string; date: Date };
	address: { street: string; city: string; cState: string; code: string };
	preferences: { newsLetter: boolean; notifications: boolean; theme: "light" | "dark" };
}

export type FormAction =
	| { type: "UPDATE_PERSONAL_INFO"; payload: Partial<FormDataType["personalInfo"]> }
	| { type: "UPDATE_ADDRESS_INFO"; payload: Partial<FormDataType["address"]> }
	| { type: "UPDATE_PREFERENCES_INFO"; payload: Partial<FormDataType["preferences"]> }
	| { type: "RESET_FORM" };
