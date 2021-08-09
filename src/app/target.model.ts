export interface Target {
	id: number;
	name: string;
	price: number;
	finished: boolean;
	image: URL | string | '../assets/unknown.jpg';
}
