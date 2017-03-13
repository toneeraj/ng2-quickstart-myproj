import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer} from './model';

@Injectable()
export class DataService {

    private customersUrl = 'api/customers';
    private statesUrl = 'api/states';

    constructor(private loggerService: LoggerService,
    private http : Http) { }
    getCustomersP(): Promise<Customer[]>  {
        this.loggerService.log(`Getting customers as a Promise via Http ...`);
        
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
            return Promise.reject('Something bad happended. Please check the console.')
        }
        
        );
    }

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log(`Getting customers as a Observable via Http...`);
        return this.http.get(this.customersUrl)
        .map( response => response.json().data as Customer[])
        .do((custs)=> {
           this.loggerService.log(`Got ${custs.length} customers `);   
         });
    }

    getStates() : Observable<string[]> {
         this.loggerService.log(`Getting states as a Observable via Http...`);
         return this.http.get(this.statesUrl)
         .map( response => response.json().data as string[])
        .do((states)=> {
           this.loggerService.log(`Got ${states.length} states `);   
         })
         .catch((error: any) => {
            this.loggerService.log(`Error occurred: ${error}`);
            return Observable.throw('Something bad happended. Please check the console.');
         });
         
    }
}