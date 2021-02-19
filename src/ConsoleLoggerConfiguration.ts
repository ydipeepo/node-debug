import LoggerConfiguration from "./LoggerConfiguration";
import Severity from "./Severity";

export default class ConsoleLoggerConfiguration implements LoggerConfiguration {

	private readonly suppressedNames = new Set<string>();

	severity = Severity.debug;
	
	isSuppressed(name: string): boolean {
		return this.suppressedNames.has(name);
	}

	suppress(names: string[]) {
		for (const name of names) {
			this.suppressedNames.add(name);
		}
	}

}
