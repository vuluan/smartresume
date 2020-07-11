import winston from 'winston';
import 'dotenv/config';


const transport = new winston.transports.File({
    filename: process.env.LOG_PATH,
    level: 'error',
    handleExceptions: true
});

const createLogFormatter = () => {
    const { combine, timestamp, printf } = winston.format;

    return combine(
        timestamp(),
        printf(info => {
            const { req, res } = info.message;
            return `${info.timestamp} ${info.level} : ${req} : ${info.message}`;
        })
    );
}

export const logger = winston.createLogger({
    format: createLogFormatter(),
    transports: transport
});
