import {TestEnvironment} from 'jest-environment-node';
import extendAllureBaseEnvironment from './allure-base-environment';

export default extendAllureBaseEnvironment(TestEnvironment);
