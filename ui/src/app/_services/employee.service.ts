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
            this.http.get(`${environment.host}/api/human-resource/employee?id=${id}`, {headers: headers}).subscribe((response: any) => {

                if (response.error) {
                    reject(response.error);
                    return;
                }
                resolve(response.result);
            });
        })

    }

    list(query?:any) {

        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.host}/api/human-resource/employee/list`,query, {headers: headers}).subscribe((response: any) => {

                if (response.error) {
                    reject(response.error);
                    return;
                }
                resolve(response.result);
            });
        })

    }

    save(employee: Employee) {
        const body = JSON.stringify(employee);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.host}/api/human-resource/employee/create`, body, {headers: headers}).subscribe((response: any) => {

                if (response.error) {
                    toastr.error('Error','Failed to save employee');
                    reject(response.error);
                    return;
                }
                toastr.success('Success','Employee saved successfully.');
                resolve(response.result);
            });
        })
    }

    update(employee: Employee) {
        const body = JSON.stringify({_id:employee._id,data:employee});
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.host}/api/human-resource/employee/update`, body, {headers: headers}).subscribe((response: any) => {


                if (response.error) {
                    toastr.error('Error','Failed to save employee');
                    reject(response.error);
                    return;
                }
                toastr.success('Success','Employee saved successfully.');
                resolve(response.result);
            });
        })
    }

}
