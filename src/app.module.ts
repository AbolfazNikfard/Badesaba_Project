import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalBindedModule } from './global-binded/global-binded.module';
import datasource from './shared/db/Datasource';
import { CatagoryModule } from './catagory/catagory.module';
import { CartModule } from './cart/cart.module';
const { entities, migrations, ...options } = datasource.options;
@Module({
  imports: [
    ProductModule,
    CatagoryModule,
    GlobalBindedModule,
    TypeOrmModule.forRoot({
      ...options,
      autoLoadEntities: true,
    }),
    GlobalBindedModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
