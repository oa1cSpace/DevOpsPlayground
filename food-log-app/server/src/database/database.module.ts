import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({ envFilePath: '../.env' })],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/db/migrations/*.js'],
        // cli: {
        //   migrationsDir: `${__dirname}/db/migratins`,
        //   entitiesDir: `${__dirname}/**/*.entity.{js, ts}`,
        // },
        migrationsRun: true,
        logging: false,
        synchronize: false,
      }),
    }),
  ],
})
export class DatabaseModule {}
