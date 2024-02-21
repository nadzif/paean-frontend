import consoleLogger from './logger/console';
import api from './api';

// const env = 'production'; /* = process.NODE_ENV */

const services = {
    log: consoleLogger,
    api,
}

export default services;