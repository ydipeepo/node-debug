/**
 * 深刻度を表す列挙型。
 */
const enum Severity {
    
    /**
     * トレースレベル。
     */
    trace = 0,

    /**
     * デバッグレベル。
     */
    debug = 1,

    /**
     * 情報レベル。
     */
    info = 2,

    /**
     * 警告レベル。
     */
    warn = 3,

    /**
     * エラーレベル。
     */
    error = 4,

}

export default Severity;
