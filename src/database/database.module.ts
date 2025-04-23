import { Module } from '@nestjs/common';
import { createPool } from 'mysql2/promise';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        return createPool({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'stoix',
          waitForConnections: true,
          connectionLimit: 10,
        });
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}