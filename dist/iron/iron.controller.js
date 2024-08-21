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
exports.IronController = void 0;
const common_1 = require("@nestjs/common");
const iron_service_1 = require("./iron.service");
let IronController = class IronController {
    constructor(ironService) {
        this.ironService = ironService;
    }
    createIron(data) {
        return this.ironService.createIron(data);
    }
    getAllIron() {
        return this.ironService.getAllIron();
    }
    getIronById(id) {
        return this.ironService.getIronById(id);
    }
    updateIron(id, data) {
        return this.ironService.updateIron(+id, data);
    }
    deleteIron(id) {
        return this.ironService.deleteIron(+id);
    }
};
exports.IronController = IronController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IronController.prototype, "createIron", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IronController.prototype, "getAllIron", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IronController.prototype, "getIronById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], IronController.prototype, "updateIron", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IronController.prototype, "deleteIron", null);
exports.IronController = IronController = __decorate([
    (0, common_1.Controller)('iron'),
    __metadata("design:paramtypes", [iron_service_1.IronService])
], IronController);
//# sourceMappingURL=iron.controller.js.map