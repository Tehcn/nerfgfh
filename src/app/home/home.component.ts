import { Component, OnInit } from '@angular/core';
import { Target } from '../target.model';
import { TargetsService } from '../targets.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor(private targetsService: TargetsService) {}

	targets!: Target[];

	ngOnInit(): void {
		this.targetsService.getTargets().subscribe(data => {
			this.targets = data;
		});

		setInterval(() => {
			this.targetsService.getTargets().subscribe(data => {
				this.targets = data;
			})
		}, 30000);
	}

	
}
