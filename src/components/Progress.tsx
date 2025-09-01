import { Circle, CircleCheck } from "lucide-react";
import { useLocation } from "react-router";

const steps = [
	{
		path: "/",
		label: "شخصی",
	},
	{
		path: "/address",
		label: "آدرس",
	},
	{
		path: "/preferences",
		label: "تنظیمات",
	},
	{
		path: "/summary",
		label: "نتیجه",
	},
];

const Progress = () => {
	const location = useLocation();
	const currentStepIndex = steps.findIndex((step) => step.path === location.pathname);
	return (
		<section className="flex gap-4 items-center w-full">
			{steps.map((step, index) => (
				<div key={step.label} className="w-full relative">
					<figure
						className={`flex gap-2 flex-col items-center p-1 ${
							index < currentStepIndex
								? "text-[#FFEB00]"
								: index === currentStepIndex
								? "text-[#f39e60]"
								: "text-[#9acbd0]"
						}`}>
						{index < currentStepIndex ? <CircleCheck size={20} /> : <Circle size={20} />}
						<figcaption className="text-sm font-light">{step.label}</figcaption>
					</figure>

					{index < steps.length - 1 && (
						<div
							className={`absolute z-[99999] h-0.5 w-5 bottom-10 -left-4 rounded-sm ${
								index < currentStepIndex
									? "bg-[#FFEB00]"
									: index === currentStepIndex
									? "bg-[#f39e60]"
									: "bg-[#9acbd0]"
							}`}></div>
					)}
				</div>
			))}
		</section>
	);
};

export default Progress;
