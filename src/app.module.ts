import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import datasource from './shared/db/Datasource';
@Module({
  imports: [ProductModule,TypeOrmModule.forRoot({
    ...datasource.options,
    autoLoadEntities: true,
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
