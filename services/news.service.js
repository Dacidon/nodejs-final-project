import { newsRepository} from '../model/index.js'

class NewsService {
    async create(dto, user) {
        const news = await newsRepository.create(dto, user);
            console.log(news);

        return news;
    };

    async delete(id) {
        const confirmation = newsRepository.delete(id);

        return confirmation;
    };
    async update(dto, id) {
        const news = await newsRepository.update(dto, id);
        return news;
    }

    async getAllNews() {
        const news = newsRepository.getAllNews();

        return news;
    }
};

export const newsService = new NewsService();