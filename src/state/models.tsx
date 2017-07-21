export default class Category {
	id:number;
	name:string;
	imgName:string;
	description:string;

	constructor(id, name, imgName, description) {
		this.id = id;
		this.name = name;
		this.imgName = imgName;
		this.description = description;
	}
}
