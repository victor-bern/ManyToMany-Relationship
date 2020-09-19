import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class DescricaoPedido1600436216664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'ped_description',
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'id_customer',
                        type: 'serial',
                    },
                    {
                        name: 'id_product',
                        type: 'serial',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'ProductFK',
                        referencedTableName: 'product',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_product'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                    {
                        name: 'CustomerFK',
                        referencedTableName: 'customers',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_customer'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
