export default () => ({
  port: process.env.PORT || '3000',
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'adasi_db',
  },
  swagger: {
    title: process.env.SWAGGER_TITLE || 'API - ADASI',
    description: process.env.SWAGGER_DESCRIPTION || 'API para gerenciamento de pessoas e cidades',
    version: process.env.SWAGGER_VERSION || '1.0',
    path: process.env.SWAGGER_PATH || 'api',
  },
}); 