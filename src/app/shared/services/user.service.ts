import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {

    private usersUrl: string = 'https://reqres.in/api/users';
    constructor(private http: Http) { }

    //grab all User
    /**
     * Get all users
     */
    getUsers(): Observable<User[]>{

        return this.http.get(this.usersUrl)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    //get a User
    /**
     * Get a user
     */
    getUser(){
        return this.http.get('http://example.com')
            .map(res => res.json())
            .catch(this.handleError);
    }

    //create a User

    //update a User

    //delete a User


    /**
     * Handle any errors from the api
     */
    private handleError(err){
   let errMessage: string;
                
                if(err instanceof Response){
                    let body = err.json() || '';

                    let error = body.err || JSON.stringify(body);

                    errMessage = `${err.status} - ${err.statusText} || } ${error}`;
                }else{

                    errMessage = err.message ? err.message : err.toString();
                }
 return Observable.throw(errMessage);
    }
}