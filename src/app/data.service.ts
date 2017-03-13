import { Injectable } from '@angular/core';
import { createTestCustomers } from './test-data';

import { LoggerService } from './logger.service';

@Injectable()
export class DataService {

    constructor(private loggerService: LoggerService) { }
    getCustomers() {
        const testCustomers = createTestCustomers();
        this.loggerService.log(`Got ${testCustomers.length} customers `);

        return createTestCustomers();
    }
}