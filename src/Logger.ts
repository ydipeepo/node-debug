import LoggerConfiguration from "./LoggerConfiguration";
import Severity from "./Severity";

export default abstract class Logger {

	private canPrint(severity: Severity) {
		return (
			severity >= this.configuration.severity &&
			!this.configuration.isSuppressed(this.name));
	}

	constructor(readonly name: string, protected readonly configuration: LoggerConfiguration) { }

	trace(...args: any[]): void {
		if (this.canPrint(Severity.trace)) {
			this.print(Severity.trace, args);
		}
	}

	debug(...args: any[]): void {
		if (this.canPrint(Severity.debug)) {
			this.print(Severity.debug, args);
		}
	}

	info(...args: any[]): void {
		if (this.canPrint(Severity.info)) {
			this.print(Severity.info, args);
		}
	}

	warn(...args: any[]): void {
		if (this.canPrint(Severity.warn)) {
			this.print(Severity.warn, args);
		}
	}

	error(...args: any[]): void {
		if (this.canPrint(Severity.error)) {
			this.print(Severity.error, args);
		}
	}

	protected abstract print(severity: Severity, args: any[]): void;

}
