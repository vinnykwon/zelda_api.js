# zelda_api.js
Web-API for [docs.zelda.fanapis.com](https://docs.zelda.fanapis.com) an open source RESTful API containing data about The Legend of Zelda series

## Example
```
async function main() {
	const { ZeldaApi } = require("./zelda_api.js")
	const zeldaApi = new ZeldaApi()
	const games = await zeldaApi.getGames()
	console.log(games)
}

main()
```
