import { Iron } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class IronService {
    private prisma;
    constructor(prisma: PrismaService);
    createIron(data: {
        purchase: number;
        sell: number;
    }): Promise<Iron>;
    getAllIron(): Promise<Iron[]>;
    getIronById(id: number): Promise<Iron>;
    updateIron(id: number, data: {
        purchase?: number;
        sell?: number;
    }): Promise<Iron>;
    deleteIron(id: number): Promise<Iron>;
}
