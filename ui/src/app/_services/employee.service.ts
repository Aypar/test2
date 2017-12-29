import {Injectable} from '@angular/core';
import {Employee} from "../_models/employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) {
    }

    getById(id: String) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.host}/api/human-resource/employee?id=${id}`, {headers: headers}).subscribe((response: Response) => {
                let response_object: any = response.json();
                if (response_object.error) {
                    reject(response_object.error);
                    return;
                }
                resolve(response_object.result);
            });
        })

    }

    list() {

        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.host}/api/human-resource/employee/list`, {headers: headers}).subscribe((response: Response) => {
                let response_object: any = response.json();
                if (response_object.error) {
                    reject(response_object.error);
                    return;
                }
                resolve(response_object.result);
            });
        })

    }

    save(employee: Employee) {
        const body = JSON.stringify(employee);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.host}/api/human-resource/employee/create`, body, {headers: headers}).subscribe((response: Response) => {
                let response_object: any = response.json();
                if (response_object.error) {
                    reject(response_object.error);
                    return;
                }
                resolve(response_object.result);
            });
        })
    }

}
