export const Validators = {
	Required: 'Value is Required',
	MinLength: (value: number) => ({
		value,
		message: `The length must be at least ${value} symbols`,
	}),
	MaxLength: (value: number) => ({
		value,
		message: `The length must not be more than ${value} symbols`,
	}),
	Min: (value: number) => ({
		value,
		message: `The value must be at least ${value}`,
	}),
	Max: (value: number) => ({
		value,
		message: `The value must not be more than ${value}`,
	}),
	Url: {
		value: /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g,
		message: 'The value is not a valid url',
	},
}