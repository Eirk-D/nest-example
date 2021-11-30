import { LogsMiddleware } from './logs.middleware';

describe('LogsMiddleware', () => {
  it('should be defined', () => {
    expect(new LogsMiddleware()).toBeDefined();
  });
});
