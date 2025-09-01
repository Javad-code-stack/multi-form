import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { useFormContext } from "@/context/useFormContext";

const PersonalInfo = () => {
	const { state, dispatch } = useFormContext();
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(undefined);
	const navigate = useNavigate();

	const nextPage = (e: React.FormEvent) => {
		e.preventDefault();
		navigate("/address");
	};

	return (
		<main className="w-full h-full self-center place-self-center z-50">
			<form
				onSubmit={nextPage}
				className="h-full grid grid-rows-4 justify-items-center content-between gap-5 place-items-end">
				<h1 className="font-bold text-2xl md:text-4xl">اطلاعات شخصی کاربر</h1>
				<div className="w-full flex items-center justify-between gap-4">
					<div className="grid w-full items-center gap-3 basis-3/5">
						<Label htmlFor="firstName">نام کوچک</Label>
						<Input
							type="text"
							id="firstName"
							placeholder="نام کوچک کاربر"
							value={state.personalInfo.firstName}
							onChange={(e) =>
								dispatch({
									type: "UPDATE_PERSONAL_INFO",
									payload: { firstName: e.target.value },
								})
							}
						/>
					</div>
					<div className="grid w-full items-center gap-3 basis-3/5">
						<Label htmlFor="lastName">نام خانوادگی</Label>
						<Input
							type="text"
							id="lastName"
							placeholder="نام خانوادگی کاربر"
							value={state.personalInfo.lastName}
							onChange={(e) =>
								dispatch({
									type: "UPDATE_PERSONAL_INFO",
									payload: { lastName: e.target.value },
								})
							}
						/>
					</div>
				</div>
				<div className="w-full flex flex-col gap-3">
					<Label htmlFor="date" className="px-1">
						تاریخ تولد
					</Label>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button id="date" className="w-48 justify-between font-normal">
								{date ? date.toLocaleDateString() : "انتخاب تاریخ"}
								<ChevronDownIcon />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto overflow-hidden p-0" align="start">
							<Calendar
								mode="single"
								selected={date}
								captionLayout="dropdown"
								onSelect={(date) => {
									dispatch({ type: "UPDATE_PERSONAL_INFO", payload: { date: date } });
									setDate(date);
									setOpen(false);
								}}
							/>
						</PopoverContent>
					</Popover>
				</div>
				<div className="grid w-full items-center gap-3">
					<Label htmlFor="email">ایمیل</Label>
					<Input
						type="email"
						id="email"
						placeholder="user@example.com"
						value={state.personalInfo.email}
						onChange={(e) =>
							dispatch({ type: "UPDATE_PERSONAL_INFO", payload: { email: e.target.value } })
						}
					/>
				</div>
				<Button type="submit" className="mt-12 cursor-pointer w-full">
					بخش بعدی
				</Button>
			</form>
		</main>
	);
};

export default PersonalInfo;
