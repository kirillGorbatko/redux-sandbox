const randomValue = Math.floor(Math.random()*10);

export const inc = () => ({
	type: 'INC'
});

export const dec = () => ({
	type: 'DEC'
});

export const rndp = () => ({
	type: 'RNDP',
	payload: randomValue,
});

export const rndm = () => ({
	type: 'RNDM',
	payload: randomValue,
});
