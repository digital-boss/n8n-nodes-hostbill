// tslint:disable: no-any

export const requestParamsMappers = {
	boolOneZero: (val: boolean) => val ? '1' : '0',
	boolOne: (val: boolean) => val ? '1' : undefined,
	boolYes: (val: boolean) => val ? 'yes' : undefined,
	boolTrue: (val: boolean) => val ? 'true' : undefined,
};

export const responseMappers: Record<string, (src: any) => any> = {
	'services/getAddons': (res: any) => Object.values(res.addons),
};
