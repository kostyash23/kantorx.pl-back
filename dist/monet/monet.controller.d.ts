import { MonetService } from './monet.service';
export declare class MonetController {
    private readonly monetService;
    constructor(monetService: MonetService);
    createMonet(data: {
        purchase: number;
        sell: number;
    }): Promise<{
        id: number;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllMonet(): Promise<{
        id: number;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getMonetById(id: number): Promise<{
        id: number;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateMonet(id: number, data: {
        purchase?: number;
        sell?: number;
    }): Promise<{
        id: number;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteMonet(id: number): Promise<{
        id: number;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
