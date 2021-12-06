const loadConfig = () => {
  const { env } = process;
  const macEnv =
    env.NODE_ENV == 'macdev' ? env.TYPEORM_PASSWORD_MAC : env.TYPEORM_PASSWORD;
  return {
    db: {
      database: env.TYPEORM_DATABASE,
      host: env.TYPEORM_HOST,
      port: parseInt(env.TYPEORM_PORT, 10) || 3306,
      username: env.TYPEORM_USERNAME,
      password: macEnv,
    },
    redis: {
      host: env.REDIS_HOST,
      port: parseInt(env.REDIS_PORT) || 6379,
    },
  };
};

export default loadConfig;
