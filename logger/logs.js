const winston = require('winston');
const {format} = require('express/lib/response');
const winstonMongodb = require('winston-mongodb');
const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'info'
        }),
        new winston.transports.MongoDB({
            level: 'info',
            db:'mongodb://srv1:27017/324283258Final',
            //db: 'mongodb://localhost:27017/324283258Final',
            options: {
                useUnifieldTopology: true
            },
            collection: 'serverLogs',
        }),
    
        new winston.transports.File({
            level: 'info',
            filename: 'log/example.log'
        }),
          new winston.transports.File({
            level: 'error',
            filename: 'log/example.log'
        })
    ],
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(info => `${info.level}${[info.timestamp]}:${info.message}`),
    ),
}
const logger = winston.createLogger(logConfiguration);
module.exports = logger;