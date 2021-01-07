class MainApi {
    constructor(options) {
        this.options = options;
    }
	
	// setToken(token) {
	// 	this.token = token;
	// }

	getUser(token) {
		return fetch(`${this.options.baseUrl}/users/me`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${token}`,
			},
		}).then(async (res) => {
			if (res.ok) {
				return res.json();
			}
			const body = await res.json();
			return Promise.reject(body.error || body.message);
		});
	}

	register(credentials) {
		return this.request("/signup", "POST", JSON.stringify(credentials));
    }

    authorize(credentials) {
		return this.request("/signin", "POST", JSON.stringify(credentials))
	}
    
	request(mainApi, method, body) {
		return fetch(`${this.options.baseUrl}${mainApi}`, {
			headers: {
				"Content-Type": "application/json",
			},
			method,
			body,
		}).then(async (res) => {
			if (res.ok) {
				return res.json();
			}
			const body = await res.json();
			return Promise.reject(body.error || body.message);
		});
    }
    
}

const mainApi = new MainApi({
    baseUrl: "http://localhost:3000",
});

export default mainApi;