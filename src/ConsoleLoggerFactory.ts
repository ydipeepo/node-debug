import ConsoleLogger from "./ConsoleLogger";
import ConsoleLoggerConfiguration from "./ConsoleLoggerConfiguration";
import LoggerFactory from "./LoggerFactory";
import Severity from "./Severity";

export default class ConsoleLoggerFactory implements LoggerFactory {

	private readonly configuration: ConsoleLoggerConfiguration = new ConsoleLoggerConfiguration();

	get severity() {
		return this.configuration.severity;
	}

	set severity(value: Severity) {
		this.configuration.severity = value;
	}

	create(name: string) {
		return new ConsoleLogger(name, this.configuration);
	}

	suppress(...names: string[]) {
		this.configuration.suppress(names);
	}

}
