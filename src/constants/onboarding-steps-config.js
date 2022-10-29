import RadioInputGroup from "@/components/RadioInputGroup/index.vue";
import DifficultyLevel from "@/components/DifficultyLevel/index.vue";

const ONBOARDING_STEPS_CONFIG = [
	{
		title: "Who are you?",
		tooltipContent: "Select the role of your interest",
		body: {
			view: RadioInputGroup,
			data: {
				options: [
					{
						displayName: "Frontend Developer",
						value: "frontend-developer",
					},
					{
						displayName: "Backend Developer",
						value: "backend-developer",
					},
					{ displayName: "Designer", value: "designer" },
					{
						displayName: "Product Manager",
						value: "product-manager",
					}
				],
				key: "job-role",
			},
			validator: (data, formErrors) => {
				if (!data["job-role"]) {
					formErrors["job-role"] = "This is a required field";
				}
			},
		},
	},
	{
		title: "What do you wish to learn?",
		tooltipContent: "Select what you wish to see more in your feed",
		body: {
			view: RadioInputGroup,
			data: {
				// If there are more than 1 question in a step then question title will be moved here
				options: [
					{ displayName: "HTML", value: "html" },
					{ displayName: "CSS", value: "css" },
					{ displayName: "Javascript", value: "javascript" },
					{ displayName: "React JS", value: "react-js" },
				],
				key: "learning-preference",
			},
		},
	},
	{
		title: "Choose your difficulty level",
		tooltipContent: "Beginner",
		body: {
			view: DifficultyLevel,
			data: {
				options: [
					{ displayName: "Beginner", value: "beginner" },
					{ displayName: "Intermediate", value: "intermediate" },
					{ displayName: "Advanced", value: "advanced" },
				],
				key: "difficulty-level",
			},
		},
	},
];

export default ONBOARDING_STEPS_CONFIG;
