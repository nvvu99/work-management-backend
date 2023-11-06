import { DataSource, DataSourceOptions } from 'typeorm'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

const datasourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
}

export default () => ({
  database: datasourceConfig,
})
export const connectionSource = new DataSource(datasourceConfig)
