import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/useFormContext";
import { useNavigate } from "react-router";
import { format } from "date-fns-jalali";

const Summary = () => {
	const { state, dispatch } = useFormContext();
	const navigate = useNavigate();

	function handleSubmit() {
		dispatch({ type: "RESET_FORM" });
	}

	const prevPage = () => {
		navigate("/preferences");
	};
	return (
		<main className="w-full self-center place-self-center z-50">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-items-center content-between gap-5 place-items-end">
				<h1 className="font-bold text-2xl md:text-4xl text-center self-center">خلاصه اطلاعات</h1>
				<div className="flex flex-col items-start gap-2 w-full">
					<h2 className="font-bold text-xl">اطلاعات شخصی</h2>
					<div className="grid grid-cols-3 gap-4">
						<div className="flex items-center gap-2">
							<p className="font-semibold">نام:</p>
							<span className="text-sm">{state.personalInfo.firstName}</span>
						</div>
						<div className="flex items-center gap-2 col-span-2">
							<p className="font-semibold">نام خانوادگی:</p>
							<span className="text-sm">{state.personalInfo.lastName}</span>
						</div>
						<div className="flex items-center gap-2 col-span-3 md:col-span-2">
							<p className="font-semibold">تولد:</p>
							<span className="text-sm">{format(state.personalInfo.date, "PPP")}</span>
						</div>
						<div className="flex flex-col md:flex-row md:items-center gap-2 col-span-2">
							<p className="font-semibold">ایمیل:</p>
							<span className="text-sm">{state.personalInfo.email}</span>
						</div>
					</div>
					<h2 className="font-bold text-xl">اطلاعات مکانی</h2>
					<div className="grid grid-cols-3 gap-4">
						<div className="flex items-center gap-2">
							<p>استان:</p>
							<span className="text-sm">{state.address.cState}</span>
						</div>
						<div className="flex items-center gap-2 col-span-2">
							<p>شهر:</p>
							<span className="text-sm">{state.address.city}</span>
						</div>
						<div className="flex items-center gap-2 col-span-2">
							<p>کدپستی:</p>
							<span className="text-sm">{state.address.code}</span>
						</div>
						<div className="flex items-center gap-2 col-span-3 md:col-span-2 truncate">
							<p>خیابان:</p>
							<span className="text-sm">{state.address.street}</span>
						</div>
					</div>
				</div>
				<div className="w-full mt-0 flex items-center justify-between gap-4">
					<Button type="button" onClick={prevPage} className="mt-12 cursor-pointer">
						بخش قبلی
					</Button>
					<Button type="submit" variant={"secondary"} className="mt-12 cursor-pointer">
						ارسال اطلاعات
					</Button>
				</div>
			</form>
		</main>
	);
};

export default Summary;
