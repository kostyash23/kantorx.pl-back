import { CurrencyService } from './currency.service';
export declare class CurrencyController {
    private readonly currencyService;
    constructor(currencyService: CurrencyService);
    getCurrencies(): Promise<{
        id: number;
        title: string;
        logo: string;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createCurrency(data: {
        title: string;
        logo: string;
        purchase: number;
        sell: number;
    }): Promise<{
        id: number;
        title: string;
        logo: string;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateCurrency(id: string, data: {
        title?: string;
        logo?: string;
        purchase?: number;
        sell?: number;
    }): Promise<{
        id: number;
        title: string;
        logo: string;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteCurrency(id: string): Promise<{
        id: number;
        title: string;
        logo: string;
        purchase: number;
        sell: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
