import { Currency } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class CurrencyService {
    private prisma;
    constructor(prisma: PrismaService);
    getCurrencies(): Promise<Currency[]>;
    createCurrency(data: {
        title: string;
        logo: string;
        purchase: number;
        sell: number;
    }): Promise<Currency>;
    updateCurrency(id: number, data: {
        title?: string;
        logo?: string;
        purchase?: number;
        sell?: number;
    }): Promise<Currency>;
    deleteCurrency(id: number): Promise<Currency>;
}
