export default class GotService {
	constructor(){
		this._apiBase = 'https://anapioficeandfire.com/api';
	}
	async getResourse(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if(!res.ok){
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return  await res.json();
	};
	
	getAllCharacters(){
		return this.getResourse(`/characters?page=5&pageSize=10`);
	};
	getCharacters(id){
		return this.getResourse(`/characters/${id}`);
	}
	getAllHouses(){
		return this.getResourse(`/houses?page=5&pageSize=10`);
	};
	getHouses(id){
		return this.getResourse(`/houses/${id}`);
	}
	getAllBooks(){
		return this.getResourse(`/books?page=5&pageSize=10`);
	};
	getBooks(id){
		return this.getResourse(`/books/${id}`);
	}
}
	