import ConsoleLoggerFactory from "./ConsoleLoggerFactory";
import Logger from "./Logger";
import LoggerConfiguration from "./LoggerConfiguration";
import LoggerFactory from "./LoggerFactory";
import NullLoggerFactory from "./NullLoggerFactory";
import Severity from "./Severity";

let loggerFactory: LoggerFactory | undefined;

function getLoggerFactory() {
	loggerFactory ??= new ConsoleLoggerFactory();
	return loggerFactory;
}

function createLogger(name: string) {
	return getLoggerFactory().create(name);
}

function suppress(...names: string[]): void {
	getLoggerFactory().suppress(...names);
}

export {
	createLogger,
	suppress,
	Severity,
	Logger,
	LoggerConfiguration,
	LoggerFactory,
	NullLoggerFactory,
}
