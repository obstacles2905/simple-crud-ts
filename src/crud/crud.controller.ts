import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Put,
  Delete
} from "@nestjs/common";
import { CrudService } from "./crud.service";
import { CrudDTO } from "./crud.dto";

@Controller("crud")
export class CrudController {
  constructor(private crudService: CrudService) {}

  @Get()
  showAll() {
    return this.crudService.showAll();
  }

  @Post()
  add(@Body() data: CrudDTO) {
    return this.crudService.add(data);
  }

  @Get(":id")
  read(@Param("id") id: string) {
    return this.crudService.read(id);

  }

  @Put(":id")
  update(@Param("id") id: string, data: Partial<CrudDTO>) {
    return this.crudService.update(id, data);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.crudService.remove(id);
  }
}
