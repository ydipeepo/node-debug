import Logger from "./Logger";
import Severity from "./Severity";

/**
 * ログシステムを構成し Logger インスタンスを作成するために使用する型を表します。
 */
export default interface LoggerFactory {

	/**
	 * 記録すべき最小の深刻度を取得または設定します。
	 */
	severity: Severity;

	/**
	 * 指定したロガー名を持つ新しい Logger インスタンスを作成します。
	 * @param name ロガーの名前。
	 */
	create(name: string): Logger;

	/**
	 * 指定したロガー名の記録を抑制します。
	 * @param names 抑制するロガー名。
	 */
	suppress(...names: string[]): void;

}
