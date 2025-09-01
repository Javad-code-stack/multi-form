import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "@/context/useFormContext";
import { useNavigate } from "react-router";

const Address = () => {
	const { state, dispatch } = useFormContext();
	const navigate = useNavigate();

	const nextPage = (e: React.FormEvent) => {
		e.preventDefault();
		navigate("/preferences");
	};

	const prevPage = () => {
		navigate("/");
	};

	return (
		<main className="w-full h-full self-center place-self-center z-50">
			<form
				onSubmit={nextPage}
				className="h-full grid grid-rows-4 justify-items-center content-between gap-5 place-items-end">
				<h1 className="font-bold text-2xl md:text-4xl">آدرس کاربر</h1>
				<div className="grid w-full items-center gap-3">
					<Label htmlFor="cState">استان</Label>
					<Input
						type="text"
						id="cState"
						placeholder="همدان"
						value={state.address.cState}
						onChange={(e) =>
							dispatch({ type: "UPDATE_ADDRESS_INFO", payload: { cState: e.target.value } })
						}
					/>
				</div>
				<div className="w-full flex items-center justify-between gap-4">
					<div className="grid basis-3/5 items-center gap-2">
						<Label htmlFor="city">شهر</Label>
						<Input
							type="text"
							id="city"
							placeholder="ملایر"
							value={state.address.city}
							onChange={(e) =>
								dispatch({ type: "UPDATE_ADDRESS_INFO", payload: { city: e.target.value } })
							}
						/>
					</div>
					<div className="grid basis-2/5 items-center gap-3">
						<Label htmlFor="code">پلاک</Label>
						<Input
							type="text"
							id="code"
							placeholder="پلاک"
							value={state.address.code}
							onChange={(e) =>
								dispatch({ type: "UPDATE_ADDRESS_INFO", payload: { code: e.target.value } })
							}
						/>
					</div>
				</div>
				<div className="grid items-center gap-3 w-full">
					<Label htmlFor="street">خیابان (خلاصه و کوتاه)</Label>
					<Input
						type="text"
						id="street"
						placeholder="کوچه"
						value={state.address.street}
						onChange={(e) =>
							dispatch({ type: "UPDATE_ADDRESS_INFO", payload: { street: e.target.value } })
						}
					/>
				</div>
				<div className="w-full flex items-center justify-between gap-4">
					<Button type="button" onClick={prevPage} className="mt-12 cursor-pointer">
						بخش قبلی
					</Button>
					<Button type="submit" className="mt-12 cursor-pointer">
						بخش بعدی
					</Button>
				</div>
			</form>
		</main>
	);
};

export default Address;
