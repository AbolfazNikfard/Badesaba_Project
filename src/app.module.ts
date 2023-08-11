import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalBindedModule } from './global-binded/global-binded.module';
import datasource from './shared/db/Datasource';
@Module({
  imports: [
    ProductModule,
    GlobalBindedModule,
    TypeOrmModule.forRoot({
      ...datasource.options,
      autoLoadEntities: true,
    }),
    GlobalBindedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
