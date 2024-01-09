import { newsService } from "../services/index.js" ;

class NewsController {
    async getAllNews(req, res){
        try {
            const news =  await newsService.getAllNews();

            res.json(news);
        } catch (error) {
            res.status(401).json({
                message: error.message
            })
        }
    };

    async create(req, res) {
        try {
            const news = await newsService.create(req.body, req.user);

            res.json(news);
        } catch (error) {
            res.status(401).json({
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const news = await newsService.update(req.body, req.params.id);

            res.json(news);
        } catch (error) {
            res.status(401).json({
                message: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            console.log(req.params.id);
            const confirm = await newsService.delete(req.params.id);

            res.json(confirm);
        } catch (error) {
            res.status(401).json({
                message: error.message
            });
        }
    };
}

export const newsController = new NewsController();