const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Formula Student Backend API',
            version: '1.0.0',
            description: 'API documentation for the Formula Student website'
        }
    },
    apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
