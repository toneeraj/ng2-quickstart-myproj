import { Injectable } from '@angular/core';
import { createTestCustomers } from './test-data';
 
@Injectable()
export class DataService {

    getCustomers() {
        return createTestCustomers();
    }
}