import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import { CrudEntity } from "./crud.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CrudDTO } from "./crud.dto";

@Injectable()
export class CrudService {
  constructor(
    @InjectRepository(CrudEntity)
    private crudRepository: Repository<CrudEntity>
  ) {}

  async showAll() {
    return await this.crudRepository.find();
  }

  async add(rawData: CrudDTO) {
    const dataToStore = await this.crudRepository.create(rawData);
    await this.crudRepository.save(dataToStore);

    return dataToStore;
  }

  async read(id: string) {
    return await this.crudRepository.findOne({where: {id}});
  }

  async update(id: string, data: Partial<CrudDTO>) {
    await this.crudRepository.update({id}, data);

    return await this.crudRepository.findOne({id});
  }

  async remove(id: string) {
    await this.crudRepository.delete({id});
    return {deleted: true};
  }
}
