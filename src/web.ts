import { WebPlugin } from '@capacitor/core';

import type { PayTabsIonicPlugin } from './definitions';

export class PayTabsIonicWeb extends WebPlugin implements PayTabsIonicPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
