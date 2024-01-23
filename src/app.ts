import fastify from 'fastify';
// import fastifySwagger from '@fastify/swagger';
// import fastifySwaggerUi from '@fastify/swagger-ui';
// import helmet from '@fastify/helmet';
// import cors from '@fastify/cors';
import { routes } from '@routes';
// import { logger } from '@shared';
// import { options, optionsUi } from './swagger';

let app: any = null;

export const appSetup = async () => {
  if (app !== null) {
    return app;
  }

  app = fastify();

  // await app.register(fastifySwagger, options);
  // await app.register(helmet);
  // await app.register(fastifySwaggerUi, optionsUi);

  // await app.register(cors);

  routes.forEach((route: any) => {
    app.route(route);
  });

  app.setErrorHandler((error: any, request: any, reply: any) => {
    // logger.error(error?.message);
    // logger.error(error?.stack);
    reply.send(error);
  });

  return app;
};
