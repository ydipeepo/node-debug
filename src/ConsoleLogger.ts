import Logger from "./Logger";
import Severity from "./Severity";

const { trace, debug, info, warn, error } = console;

function getColorPrefix(code: number) {
	return `\u001b[${code}m`;
}

function getColorCodeFromSeverity(severity: number) {
	switch (severity) {
		case Severity.trace:
		case Severity.debug:
			return 1;
		case Severity.info:
			return 32;
		case Severity.warn:
			return 33;
		case Severity.error:
			return 31;
	}
	return 0;
}

export default class ConsoleLogger extends Logger {

	protected print(severity: Severity, args: any[]) {

		if (args.length > 0) {
			const arg0 = `${getColorPrefix(getColorCodeFromSeverity(severity))}[${this.name}]${getColorPrefix(0)} ${args[0]}`;
			args = args.slice(1);
			args.unshift(arg0);
		}

		switch (severity) {
			case Severity.trace: trace(...args); break;
			case Severity.debug: debug(...args); break;
			case Severity.info:  info(...args);  break;
			case Severity.warn:  warn(...args);  break;
			case Severity.error: error(...args); break;
		}

	}

}
