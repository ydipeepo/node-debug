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

/**
 * 指定したロガー名を持つ新しいデフォルトの Logger インスタンスを作成します。
 * @param name ロガーの名前。
 */
function createLogger(name: string) {
	return getLoggerFactory().create(name);
}

/**
 * createLogger() で作成したロガーについて指定したロガー名の記録を抑制します。
 * @param names 抑制するロガー名。
 */
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
