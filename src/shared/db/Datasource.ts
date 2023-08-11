import { DataSource } from "typeorm";

const datasource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'Badesaba_Shop',
    username: 'postgres',
    password: 'postgres',
    entities:["src/**/*.entities.ts"],
    migrations:["src/shared/db/migrations/*.ts"],
    synchronize: true 
});
export default datasource;