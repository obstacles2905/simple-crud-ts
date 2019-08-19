"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const crud_entity_1 = require("./crud.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CrudService = class CrudService {
    constructor(crudRepository) {
        this.crudRepository = crudRepository;
    }
    async showAll() {
        return await this.crudRepository.find();
    }
    async add(rawData) {
        const dataToStore = await this.crudRepository.create(rawData);
        await this.crudRepository.save(dataToStore);
        return dataToStore;
    }
    async read(id) {
        return await this.crudRepository.findOne({ where: { id } });
    }
    async update(id, data) {
        await this.crudRepository.update({ id }, data);
        return await this.crudRepository.findOne({ id });
    }
    async remove(id) {
        await this.crudRepository.delete({ id });
        return { deleted: true };
    }
};
CrudService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(crud_entity_1.CrudEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CrudService);
exports.CrudService = CrudService;
//# sourceMappingURL=crud.service.js.map