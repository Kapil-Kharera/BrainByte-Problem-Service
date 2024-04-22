const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');

const allowedTransports = [];

//Transport for logging console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}] : ${log.message}`)
    )
}));

//Transport for logging in mongodb database
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error', //allowing only error logs only -> because it is costs you.
    db: LOG_DB_URL,
    collection: 'logs', //giving name to collection
}));

//Transport for logging in File
allowedTransports.push(new winston.transports.File({
    filename: 'app.log'
}));

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}] : ${log.message}`)
    ),
    transports: allowedTransports
});

module.exports = logger;
