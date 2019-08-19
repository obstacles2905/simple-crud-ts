import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CrudModule } from "./crud/crud.module";

@Module({
  imports: [TypeOrmModule.forRoot(), CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
