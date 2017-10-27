import { safe } from '../utils';
const ksysLogger = require('@kurtosys/ksys_utils/dist/logging').KsysLogger;
const ksysLogLevel = require('@kurtosys/ksys_utils/dist/logging').KsysLogLevel;

let env;
let enabled = true;
let nodeArgumentEnvironment = safe(() => process.argv[2], 'PROD');
switch (nodeArgumentEnvironment) {
	case 'PROXY':
		env = ksysLogLevel.development;
		enabled = false;
		break;
	case 'LOCAL':
	case 'DEV':
	case 'RELEASE':
		env = ksysLogLevel.development;
		break;
	case 'STAGING':
		env = ksysLogLevel.staging;
		break;
	case 'PROD':
	default:
		env = ksysLogLevel.production;
		break;
}

let logConfig = {
	project: 'ksys345_loaders',
	logLevel: env,
	logSync: true,
	enabled: enabled
};

export const logger = new ksysLogger(logConfig);