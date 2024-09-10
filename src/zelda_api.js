class ZeldaApi {
	constructor() {
		this.api = "https://zelda.fanapis.com/api"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getGames(limit = 20, page = 0) {
		const response = await fetch(
			`${this.api}/games?limit=${limit}&page=${page}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getGame(gameId) {
		const response = await fetch(
			`${this.api}/games/${gameId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getStaff(limit = 20, page = 0) {
		const response = await fetch(
			`${this.api}/staff?limit=${limit}&page=${page}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getStaffById(staffId) {
		const response = await fetch(
			`${this.api}/staff/${staffId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCharacters(limit = 20, page = 0) {
		const response = await fetch(
			`${this.api}/characters?limit=${limit}&page=${page}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCharacter(characterId) {
		const response = await fetch(
			`${this.api}/characters/${characterId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMonsters(limit = 20, page = 0) {
		const response = await fetch(
			`${this.api}/monsters?limit=${limit}&page=${page}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMonster(monsterId) {
		const response = await fetch(
			`${this.api}/monsters/${monsterId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getBosses(limit = 20, page = 0) {
		const response = await fetch(
			`${this.api}/bosses?limit=${limit}&page=${page}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getBoss(bossId) {
		const response = await fetch(
			`${this.api}/bosses/${bossId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getDungeons(limit = 20, page = 0) {
		const response = await fetch(
			`${this.api}/dungeons?limit=${limit}&page=${page}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getDungeon(dungeonId) {
		const response = await fetch(
			`${this.api}/dungeons/${dungeonId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getPLaces(limit = 20, page = 0) {
		const response = await fetch(
			`${this.api}/places?limit=${limit}&page=${page}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getPlace(placeId) {
		const response = await fetch(
			`${this.api}/places/${placeId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getItems(limit = 20, page = 0) {
		const response = await fetch(
			`${this.api}/items?limit=${limit}&page=${page}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getItem(itemId) {
		const response = await fetch(
			`${this.api}/items/${characterId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {ZeldaApi}
