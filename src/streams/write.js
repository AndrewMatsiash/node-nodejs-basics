import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { stdout, stdin, exit } from 'process';

const bye = key => {
	console.log(key);
	if (key && key.name === 'enter') {
		console.log('bye bye');
		process.exit();
	}
	// stdout.write('\nbye!\n');
	// exit();
};

const write = async () => {
	const path = join(__dirname, 'files', 'fileToWrite.txt');
	const writableStream = createWriteStream(path);

	stdout.write('Напиши что нибудь: ');

	stdin.on('data', data => {
		// if (data.toString().trim() === 'exit') {
		// 	bye();
		// }
		writableStream.write(data);
	});

	process.on('keypress', bye);
};

await write();
