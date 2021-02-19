import Logger from "./Logger";
import LoggerFactory from "./LoggerFactory";
import NullLogger from "./NullLogger";
import NullLoggerConfiguration from "./NullLoggerConfiguration";
import Severity from "./Severity";

/**
 * 何もしない Logger インスタンスを作成するために使用する型を表します。
 */
export default class NullLoggerFactory implements LoggerFactory {

	private readonly configuration: NullLoggerConfiguration = new NullLoggerConfiguration();

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
		return new NullLogger(name, this.configuration);
	}

    /** @inheritdoc */
	suppress(..._names: string[]) {
		this.configuration.suppress();
	}

}
