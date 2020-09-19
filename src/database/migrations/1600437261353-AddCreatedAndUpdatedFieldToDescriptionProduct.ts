import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCreatedAndUpdatedFieldToDescriptionProduct1600437261353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('ped_description', new TableColumn(
            {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
            },
        ))

        await queryRunner.addColumn('ped_description', new TableColumn(
            {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
            },
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
