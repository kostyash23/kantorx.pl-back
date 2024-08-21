import { Monet } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class MonetService {
    private prisma;
    constructor(prisma: PrismaService);
    createMonet(data: {
        purchase: number;
        sell: number;
    }): Promise<Monet>;
    getAllMonet(): Promise<Monet[]>;
    getMonetById(id: number): Promise<Monet>;
    updateMonet(id: number, data: {
        purchase?: number;
        sell?: number;
    }): Promise<Monet>;
    deleteMonet(id: number): Promise<Monet>;
}
