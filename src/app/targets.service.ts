import { Injectable } from '@angular/core';
import { Target } from './target.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class TargetsService {
	targets: Target[] = [
		{
			id: 0,
			name: 'John Doe',
			price: 0.01,
			finished: true,
			image: '../assets/unknown.jpg',
		},
		{
			id: 1,
			name: 'Unknown',
			price: 0.02,
			finished: false,
			image: '../assets/unknown.jpg',
		},
	];

	constructor(private http: HttpClient) {}

	getTargets(): Observable<any> {
		return this.http.get("http://localhost:3002/targets");
	}

	postTarget(target: Target) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json'
			})
		};
		console.log("posting target");
		return this.http.post("http://localhost:3002/targets/create", target, httpOptions).subscribe(data => {

		});
	}

	deleteTarget(id: number) {
		return this.http.delete(`http://localhost:3002/targets/${id}/delete`);
	}
}
