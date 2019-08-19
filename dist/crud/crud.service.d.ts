import { Repository } from "typeorm";
import { CrudEntity } from "./crud.entity";
import { CrudDTO } from "./crud.dto";
export declare class CrudService {
    private crudRepository;
    constructor(crudRepository: Repository<CrudEntity>);
    showAll(): Promise<CrudEntity[]>;
    add(rawData: CrudDTO): Promise<CrudEntity>;
    read(id: string): Promise<CrudEntity>;
    update(id: string, data: Partial<CrudDTO>): Promise<CrudEntity>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
