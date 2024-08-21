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
exports.MonetController = void 0;
const common_1 = require("@nestjs/common");
const monet_service_1 = require("./monet.service");
let MonetController = class MonetController {
    constructor(monetService) {
        this.monetService = monetService;
    }
    createMonet(data) {
        return this.monetService.createMonet(data);
    }
    getAllMonet() {
        return this.monetService.getAllMonet();
    }
    getMonetById(id) {
        return this.monetService.getMonetById(id);
    }
    updateMonet(id, data) {
        return this.monetService.updateMonet(+id, data);
    }
    deleteMonet(id) {
        return this.monetService.deleteMonet(+id);
    }
};
exports.MonetController = MonetController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MonetController.prototype, "createMonet", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MonetController.prototype, "getAllMonet", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MonetController.prototype, "getMonetById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], MonetController.prototype, "updateMonet", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MonetController.prototype, "deleteMonet", null);
exports.MonetController = MonetController = __decorate([
    (0, common_1.Controller)('monet'),
    __metadata("design:paramtypes", [monet_service_1.MonetService])
], MonetController);
//# sourceMappingURL=monet.controller.js.map