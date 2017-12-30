import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Department} from "../_models/department";

@Injectable()
export class DepartmentService {

    constructor(private http: HttpClient) {
    }

    getById(id: String) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.host}/api/department?id=${id}`, {headers: headers}).subscribe((response: any) => {

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
            this.http.post(`${environment.host}/api/department/list`, query,{headers: headers}).subscribe((response: any) => {

                if (response.error) {
                    reject(response.error);
                    return;
                }
                resolve(response.result);
            });
        })

    }

    save(department: Department) {
        const body = JSON.stringify(department);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.host}/api/department/create`, body, {headers: headers}).subscribe((response: any) => {

                if (response.error) {
                    toastr.error('Error','Failed to save department');
                    reject(response.error);
                    return;
                }
                toastr.success('Success','Department saved successfully.');
                resolve(response.result);
            });
        })
    }

    update(department: Department) {
        const body = JSON.stringify({_id:department._id,data:department});
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.host}/api/department/update`, body, {headers: headers}).subscribe((response: any) => {


                if (response.error) {
                    toastr.error('Error','Failed to save department');
                    reject(response.error);
                    return;
                }
                toastr.success('Success','Department saved successfully.');
                resolve(response.result);
            });
        })
    }

}
