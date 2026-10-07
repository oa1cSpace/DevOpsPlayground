import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddHungerColumnToMealTable1685819108894
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'meals',
      new TableColumn({
        name: 'hunger',
        type: 'int',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('meals', 'hunger');
  }
}
