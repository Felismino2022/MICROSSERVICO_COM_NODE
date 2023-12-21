import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['accepted-rhino-10918-us1-kafka.upstash.io:9092'],  // Remova o "https://" e ajuste a URL do broker
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',
        username: 'YWNjZXB0ZWQtcmhpbm8tMTA5MTgkF3qqppKQG4_7fxz9G802sHCoYS39-MERiMc',
        password: 'Mjc0MWFkOGQtZjhiMy00OTM4LWI2NWYtNjRjYzBhYzVlNjQ2',
    },
    logLevel: logLevel.ERROR,
});

export { kafka };
