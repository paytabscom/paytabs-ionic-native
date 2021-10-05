import { WebPlugin } from '@capacitor/core';
import type { PayTabsIonicPlugin } from './definitions';
export declare class PayTabsIonicWeb extends WebPlugin implements PayTabsIonicPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
