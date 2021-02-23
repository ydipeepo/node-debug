import ConsoleLogger from "./ConsoleLogger";
import ConsoleLoggerConfiguration from "./ConsoleLoggerConfiguration";
import Logger from "./Logger";
import LoggerFactory from "./LoggerFactory";
import Severity from "./Severity";

/**
 * コンソールへ出力する Logger インスタンスを作成するために使用する型を表します。
 */
export default class ConsoleLoggerFactory implements LoggerFactory {

	private readonly configuration: ConsoleLoggerConfiguration = new ConsoleLoggerConfiguration();

	/** @inheritdoc */
	get severity() {
		return this.configuration.severity;
	}

	/** @inheritdoc */
	set severity(value: Severity) {
		this.configuration.severity = value;
	}

	/** @inheritdoc */
	create(name: string): Logger {
		return new ConsoleLogger(name, this.configuration);
	}

	/** @inheritdoc */
	suppress(...names: string[]) {
		this.configuration.suppress(names);
	}

}
