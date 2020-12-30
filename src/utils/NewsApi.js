import dayjs from "dayjs";
const now = dayjs();
  const currentDate = now.format('YYYY-MM-DD');
  const pastDate = now.subtract(7, 'day').format('YYYY-MM-DD');
  const KEY = "9b8c2025d24e4347b94b2eb0e72a7dc3";
class NewsApi {
  constructor(options) {
    this.options = options;
  }

  searchNews(keyword) {
    return fetch(`${this.options.baseUrl}?q=${keyword}&from=${pastDate}&to=${currentDate}&pageSize=100&apiKey=${KEY}`, {
      method: "GET",
    }).then(async (res) => {
        if (res.ok) {
            return res.json();
        }
        const body = await res.json();
        return Promise.reject(body.error || body.message);
    });
}
  }

const newsApi = new NewsApi({
  baseUrl: "https://nomoreparties.co/news/v2/everything",
});

export default newsApi;
