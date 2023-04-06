module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf8kdbkgqg47fti26ce0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarra_wa6m'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '4YGxxQ81BGMzhNXwbjaMqaymCEIrFBt1'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
