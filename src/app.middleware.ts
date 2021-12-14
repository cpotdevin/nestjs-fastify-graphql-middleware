import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(request: FastifyRequest, reply: FastifyReply, next: () => void): void {
    console.log('middleware ran');

    next();
  }
}
