import Logger from "./Logger";
import Severity from "./Severity";

export default interface LoggerFactory {

	severity: Severity;

	create(name: string): Logger;

	suppress(...names: string[]): void;

}
