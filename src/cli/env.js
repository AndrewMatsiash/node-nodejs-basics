const parseEnv = () => {
	const ArrKeys = Object.entries(process.env).filter(([key]) => key.match(/RSS_/));
	const keysString = ArrKeys.map(el => el.join('=')).join('; ');
	console.log(keysString);
};

parseEnv();
