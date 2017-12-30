import {Injectable} from '@angular/core';
import {Employee} from "../_models/employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Branch} from "../_models/branch";

@Injectable()
export class BranchService {

    constructor(private http: HttpClient) {
    }

    getById(id: String) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.host}/api/branch?id=${id}`, {headers: headers}).subscribe((response: any) => {

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
            this.http.post(`${environment.host}/api/branch/list`, query,{headers: headers}).subscribe((response: any) => {

                if (response.error) {
                    reject(response.error);
                    return;
                }
                resolve(response.result);
            });
        })

    }

    save(branch: Branch) {
        const body = JSON.stringify(branch);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.host}/api/branch/create`, body, {headers: headers}).subscribe((response: any) => {

                if (response.error) {
                    toastr.error('Error','Failed to save branch');
                    reject(response.error);
                    return;
                }
                toastr.success('Success','Branch saved successfully.');
                resolve(response.result);
            });
        })
    }

    update(branch: Branch) {
        const body = JSON.stringify({_id:branch._id,data:branch});
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.host}/api/branch/update`, body, {headers: headers}).subscribe((response: any) => {


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
