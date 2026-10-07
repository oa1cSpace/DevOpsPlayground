import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMealTable1685288455053 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'meals',
        columns: [
          {
            name: 'id',
            isGenerated: true,
            type: 'int',
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'meal',
            type: 'text',
          },
          {
            name: 'amount',
            type: 'float',
          },
          {
            name: 'measure',
            type: 'text',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('meal');
  }
}
