import Logger from "./Logger";
import Severity from "./Severity";

const { trace, debug, info, warn, error } = console;

export default class ConsoleLogger extends Logger {

	protected print(severity: Severity, args: any[]) {

		if (args.length > 0) {
			const arg0 = `[${this.name}] ${args[0]}`;
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
