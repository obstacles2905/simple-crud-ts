import { CrudService } from "./crud.service";
import { CrudDTO } from "./crud.dto";
export declare class CrudController {
    private crudService;
    constructor(crudService: CrudService);
    showAll(): Promise<import("./crud.entity").CrudEntity[]>;
    add(data: CrudDTO): Promise<import("./crud.entity").CrudEntity>;
    read(id: string): Promise<import("./crud.entity").CrudEntity>;
    update(id: string, data: Partial<CrudDTO>): Promise<import("./crud.entity").CrudEntity>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
