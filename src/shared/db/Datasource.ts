import { DataSource } from "typeorm";

const datasource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'Badesaba_Shop',
    username: 'postgres',
    password: 'postgres',
    entities:["src/**/*.entity.ts"],
    migrations:["src/shared/db/migrations/*.ts"]
});
export default datasource;