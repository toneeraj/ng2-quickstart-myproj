import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer} from './model';

@Injectable()
export class DataService {

    private customersUrl = 'api/customers';

    constructor(private loggerService: LoggerService,
    private http : Http) { }
    getCustomersP(): Promise<Customer[]>  {
        this.loggerService.log(`Getting customers as a Promise ...`);
        
        //Call http get. By default it returns observable. Calling method to convert to Promise.
        return this.http.get(this.customersUrl)
        .toPromise()
        .then(response => { //customer data is embedded in response. The data property gives me desired result.
            const custs = response.json().data as Customer[];//cast as cusotmer[]
            this.loggerService.log(`Got ${custs.length} customers `);
            return custs;
        },
        error => {
            this.loggerService.log(`Error occurred: ${error}`);
            return Promise.reject('Something bad happended. Please check the console.');
        }
        
        );


        
        //Returning a promise. Need to be of Customer[]. otherwise typecast error while using it.
        // return new Promise<Customer[]>(resolve => {
        //     setTimeout(() => {
        //          this.loggerService.log(`Got ${customers.length} customers `);
        //          resolve(customers);
        //     }, 1500);
        // });
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