export class Character {
	id:number;
	value:string;
	isGuessed:boolean;

	constructor(id:number, value:string) {
		this.id = id;
		this.value = value;
		this.isGuessed = false;
	}
}