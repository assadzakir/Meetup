import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

/**
 * Swagger definition.
 */
const swaggerDefinition = {
  info: {
    title: 'Meetup App API',
    version: '1.0.0',
    description: 'Meetup App API reference for developers',
  },
  host: 'meetupsapi.herokuapp.com',
  basePath: '/',
};

/**
 * Options for the swagger docs.
 */
const swaggerOptions = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: [path.join(__dirname, '../routes/routes.js')],
};

/**
 * Initialize swagger-jsdoc.
 */
const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
