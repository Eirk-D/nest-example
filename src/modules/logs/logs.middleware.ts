import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { method, path } = req;
    // console.log(`${method} ${path}`);
    next();
  }
}
