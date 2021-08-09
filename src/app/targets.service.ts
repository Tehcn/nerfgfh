import { Injectable } from '@angular/core';
import { Target } from './target.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class TargetsService {
	targets: Target[] = []

	constructor(private http: HttpClient) {}

	getTargets(): Observable<any> {
		return this.http.get("https://nerfgfh-api.herokuapp.com/targets");
	}

	postTarget(target: Target) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json'
			})
		};
		console.log("posting target");
		return this.http.post("https://nerfgfh-api.herokuapp.com/targets/create", target, httpOptions).subscribe(data => {

		});
	}

	deleteTarget(id: number) {
		return this.http.delete(`https://nerfgfh-api.herokuapp.com/targets/${id}/delete`);
	}
}
