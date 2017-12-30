import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Position} from "../_models/position";


@Injectable()
export class PositionService {

    constructor(private http: HttpClient) {
    }

    getById(id: String) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.host}/api/position?id=${id}`, {headers: headers}).subscribe((response: any) => {

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
            this.http.post(`${environment.host}/api/position/list`, query,{headers: headers}).subscribe((response: any) => {

                if (response.error) {
                    reject(response.error);
                    return;
                }
                resolve(response.result);
            });
        })

    }

    save(position: Position) {
        const body = JSON.stringify(position);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.host}/api/position/create`, body, {headers: headers}).subscribe((response: any) => {

                if (response.error) {
                    toastr.error('Error','Failed to save position');
                    reject(response.error);
                    return;
                }
                toastr.success('Success','Position saved successfully.');
                resolve(response.result);
            });
        })
    }

    update(position: Position) {
        const body = JSON.stringify({_id:position._id,data:position});
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.host}/api/position/update`, body, {headers: headers}).subscribe((response: any) => {


                if (response.error) {
                    toastr.error('Error','Failed to save position');
                    reject(response.error);
                    return;
                }
                toastr.success('Success','Position saved successfully.');
                resolve(response.result);
            });
        })
    }

}
