import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer} from './model';

@Injectable()
export class DataService {

    constructor(private loggerService: LoggerService) { }
    getCustomersP(): Promise<Customer[]>  {
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

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log(`Getting customers as a Observable ...`);
        const customers = createTestCustomers();
        return of(customers)
            .delay(1500)
            .do(()=> {
              this.loggerService.log(`Got ${customers.length} customers `);   
            });
    }
}