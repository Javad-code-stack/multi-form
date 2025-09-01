import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import { useNavigate } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormContext } from "@/context/useFormContext";

const Preferences = () => {
	const { state, dispatch } = useFormContext();
	const navigate = useNavigate();

	const nextPage = (e: React.FormEvent) => {
		e.preventDefault();
		navigate("/summary");
	};

	const prevPage = () => {
		navigate("/address");
	};

	return (
		<main className="w-full h-full self-center place-self-center z-50">
			<form
				onSubmit={nextPage}
				className="h-full grid grid-rows-4 justify-items-center content-between gap-5 place-items-end">
				<h1 className="font-bold text-2xl md:text-4xl">اطلاعات تکمیلی</h1>
				<RadioGroup
					value={state.preferences.theme}
					onValueChange={(value) =>
						dispatch({
							type: "UPDATE_PREFERENCES_INFO",
							payload: { theme: value as "light" | "dark" },
						})
					}
					className="flex flex-col items-end w-full py-2 px-3">
					<p className="text-sm font-light">انتخاب ترکیب رنگی سیستم</p>
					<div className="flex items-center gap-3">
						<Label htmlFor="dark">تاریک</Label>
						<RadioGroupItem value="dark" id="dark" />
					</div>
					<div className="flex items-center gap-3">
						<Label htmlFor="light">روشن</Label>
						<RadioGroupItem value="light" id="light" />
					</div>
				</RadioGroup>
				<RadioGroup defaultValue="send" className="flex flex-col items-end w-full py-2 px-3">
					<p className="text-sm font-light">ارسال خبرنامه و یا اعلان به شما</p>
					<div className="flex items-center gap-3">
						<Label htmlFor="newsLetter">ارسال خبرنامه</Label>
						<Checkbox
							id="newsLetter"
							checked={state.preferences.newsLetter}
							onCheckedChange={(checked) =>
								dispatch({
									type: "UPDATE_PREFERENCES_INFO",
									payload: { newsLetter: checked as boolean },
								})
							}
						/>
					</div>
					<div className="flex items-center gap-3">
						<Label htmlFor="notifications">فعال سازی اعلان های سیستم</Label>
						<Checkbox
							id="notifications"
							checked={state.preferences.notifications}
							onCheckedChange={(checked) =>
								dispatch({
									type: "UPDATE_PREFERENCES_INFO",
									payload: { notifications: checked as boolean },
								})
							}
						/>
					</div>
				</RadioGroup>
				<div className="w-full mt-0 flex items-center justify-between gap-4">
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

export default Preferences;
