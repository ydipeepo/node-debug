import Severity from "./Severity";

/**
 * ロガーの構成を表します。
 */
export default interface LoggerConfiguration {

    /**
     * 記録すべき最小の深刻度を取得します。
     */
    readonly severity: Severity;

    /**
     * 指定したロガーの名前は抑制されているかどうかを調べます。
     * @param name ロガーの名前。
     */
    isSuppressed(name: String): boolean;

}
