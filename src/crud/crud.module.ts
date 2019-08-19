import { Module } from "@nestjs/common";
import { CrudController } from "./crud.controller";
import { CrudService } from "./crud.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CrudEntity } from "./crud.entity";


@Module({
  imports: [TypeOrmModule.forFeature([CrudEntity])],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
