export const requestParamsMappers = {
	boolOneZero: (val: boolean) => val ? '1' : '0',
	boolOne: (val: boolean) => val ? '1' : undefined,
	boolYes: (val: boolean) => val ? 'yes' : undefined,
	boolTrue: (val: boolean) => val ? 'true' : undefined,
};
