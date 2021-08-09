import { Location, LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TargetsService } from '../targets.service';

@Component({
	selector: 'app-buy',
	templateUrl: './buy.component.html',
	styleUrls: ['./buy.component.scss'],
})
export class BuyComponent implements OnInit {

	constructor(private targetsService: TargetsService) { }

	id!: number;
	name!: string;
	price: number = 0;
	finished: boolean = false;
	image!: URL | string; 

	ngOnInit(): void {

	}

	toHomePage() {
		window.location.href = "./home";
	}

	sendTarget() {
		const logCSS = "color: #0077ff; font-weight: bold; font-size: 2em;"

		const target = {
			id: this.id,
			name: this.name,
			price: this.price,
			finished: this.finished,
			image: this.image,
		}
		console.group("New Target");
		console.log(`%cNew target ordered`, logCSS);
		console.log("Target: %O", target);
		console.groupEnd();

		this.targetsService.postTarget(target);
	}

	onChange(event: any) {
		this.image = event.target.value;
		console.log(this.image);
	}

}
