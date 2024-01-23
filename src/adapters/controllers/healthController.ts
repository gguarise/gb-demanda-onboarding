import { loadPackageJson } from '@shared';

export const healthController = {
  /**
   * Check the general availability of the application
   *
   * @param {import('fastify').FastifyRequest} request
   * @param {import('fastify').FastifyReply} reply
   */
  check() {
    return { status: 'ok' };
  },

  /**
   * Complete analysis of application healthy
   *
   * @param {import('fastify').FastifyRequest} request
   * @param {import('fastify').FastifyReply} reply
   */
  async complete() {
    const pkg = loadPackageJson();
    return {
      meta: {
        name: pkg.name,
        description: pkg.description,
        version: pkg.version,
        uptime: process.uptime(),
        nodeVersion: process.version
      },
      status: 'ok',
      dependencies: []
    };
  }
};
