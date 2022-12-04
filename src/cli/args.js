const parseArgs = () => {
	const commandLineArguments = process.argv.map(arg => `propName is ${arg}`).join(', ');
	console.log(commandLineArguments);
};

parseArgs();
