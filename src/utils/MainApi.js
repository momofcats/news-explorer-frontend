class MainApi {
    constructor(options) {
        this.options = options;
    }
	
	setToken(token) {
		this.token = token;
	}

	getUser() {
		return fetch(`${this.options.baseUrl}/users/me`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${this.token}`,
			},
		}).then(async (res) => {
			if (res.ok) {
				return res.json();
			}
			const body = await res.json();
			return Promise.reject(body.error || body.message);
		});
	}

	getSavedArticles() {
		return fetch(`${this.options.baseUrl}/articles`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${this.token}`,
			},
		}).then(async (res) => {
			if (res.ok) {
				return res.json();
			}
			const body = await res.json();
			return Promise.reject(body.error || body.message);
		});
	}

	getAppInfo() {
		return Promise.all([this.getSavedArticles(), this.getUser()]);
	}
	
	addBookmark(article) {

		return fetch(`${this.options.baseUrl}/articles`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${this.token}`,
			},
			body: JSON.stringify({
				keyword: article.keyword,
				title: article.title,
				description: article.description,
				publishedAt: article.publishedAt,
				source: article.source,
				url: article.url,
				urlToImage: article.urlToImage,
			})
		}).then(async (res) => {
			if (res.ok) {
				return res.json();
			}
			const body = await res.json();
			return Promise.reject(body.error || body.message);
		});
	}

	removeBookmark(articleId) {
		return fetch(`${this.options.baseUrl}/articles/${articleId}`, {
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${this.token}`,
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