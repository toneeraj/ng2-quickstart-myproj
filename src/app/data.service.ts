import { Injectable } from '@angular/core';
import { createTestCustomers } from './test-data';

import { LoggerService } from './logger.service';
import { Customer} from './model';

@Injectable()
export class DataService {

    constructor(private loggerService: LoggerService) { }
    getCustomers() {
        this.loggerService.log(`Getting customers as a Promise ...`);
        const customers = createTestCustomers();
        
        //Returning a promise. Need to be of Customer[]. otherwise typecast error while using it.
        return new Promise<Customer[]>(resolve => {
            setTimeout(() => {
                 this.loggerService.log(`Got ${customers.length} customers `);
                 resolve(customers);
            }, 1500);
        });
    }
}