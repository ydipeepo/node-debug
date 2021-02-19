import LoggerConfiguration from "./LoggerConfiguration";
import Severity from "./Severity";

export default class NullLoggerConfiguration implements LoggerConfiguration {

    severity = Severity.debug;

	isSuppressed(): boolean {
        return true;
	}

	suppress() { }

}
