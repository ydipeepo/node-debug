import ConsoleLoggerFactory from "./ConsoleLoggerFactory";
import Logger from "./Logger";
import LoggerConfiguration from "./LoggerConfiguration";
import LoggerFactory from "./LoggerFactory";
import Severity from "./Severity";

const defaultLoggerFactory: LoggerFactory = new ConsoleLoggerFactory();

function createLogger(name: string) {
	return defaultLoggerFactory.create(name);
}

function suppress(...names: string[]): void {
	defaultLoggerFactory.suppress(...names);
}

export {
	createLogger,
	suppress,
	Logger,
	LoggerConfiguration,
	LoggerFactory,
	Severity,
}
