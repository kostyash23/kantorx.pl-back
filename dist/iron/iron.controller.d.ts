import { IronService } from './iron.service';
export declare class IronController {
    private readonly ironService;
    constructor(ironService: IronService);
    createIron(data: {
        purchase: number;
        sell: number;
    }): Promise<{
        id: number;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllIron(): Promise<{
        id: number;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getIronById(id: number): Promise<{
        id: number;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateIron(id: number, data: {
        purchase?: number;
        sell?: number;
    }): Promise<{
        id: number;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteIron(id: number): Promise<{
        id: number;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
