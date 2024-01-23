import { healthController } from '@controllers';

const healthBaseUrl = '/healthcheck';

// Options: https://fastify.dev/docs/latest/Reference/Routes/
export const healthRoutes = [
  {
    method: 'GET',
    url: healthBaseUrl,
    handler: healthController.check
  },
  {
    method: 'GET',
    url: `${healthBaseUrl}/complete`,
    handler: healthController.complete
  }
];
