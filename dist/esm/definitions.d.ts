export interface PayTabsIonicPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
