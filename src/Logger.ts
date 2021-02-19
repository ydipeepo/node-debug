import LoggerConfiguration from "./LoggerConfiguration";
import Severity from "./Severity";

/**
 * ログを記録するための型を表します。
 */
export default abstract class Logger {

	private canPrint(severity: Severity) {
		return (
			severity >= this.configuration.severity &&
			!this.configuration.isSuppressed(this.name));
	}

	/**
	 * このクラスインスタンスを作成します。
	 * @param name ロガーの名前。
	 * @param configuration 構成。
	 */
	constructor(readonly name: string, protected readonly configuration: LoggerConfiguration) { }

	/**
	 * トレースログを記録します。
	 * @param args 記録するデータ。
	 */
	trace(...args: any[]): void {
		if (this.canPrint(Severity.trace)) {
			this.print(Severity.trace, args);
		}
	}

	/**
	 * デバッグログを記録します。
	 * @param args 記録するデータ。
	 */
	debug(...args: any[]): void {
		if (this.canPrint(Severity.debug)) {
			this.print(Severity.debug, args);
		}
	}

	/**
	 * 情報ログを記録します。
	 * @param args 記録するデータ。
	 */
	info(...args: any[]): void {
		if (this.canPrint(Severity.info)) {
			this.print(Severity.info, args);
		}
	}

	/**
	 * 警告ログを記録します。
	 * @param args 記録するデータ。
	 */
	warn(...args: any[]): void {
		if (this.canPrint(Severity.warn)) {
			this.print(Severity.warn, args);
		}
	}

	/**
	 * エラーログを記録します。
	 * @param args 記録するデータ。
	 */
	error(...args: any[]): void {
		if (this.canPrint(Severity.error)) {
			this.print(Severity.error, args);
		}
	}

	/**
	 * ログの記録処理を実装します。
	 * @param severity 記録するデータの深刻度。
	 * @param args 記録するデータ。
	 */
	protected abstract print(severity: Severity, args: any[]): void;

}
