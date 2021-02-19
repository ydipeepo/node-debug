import Severity from "./Severity";

export default interface LoggerConfiguration {

    readonly severity: Severity;

    isSuppressed(name: String): boolean;

}
