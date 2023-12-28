import { NewsModel } from './schemas/index.js';
import { newsDto} from '../dto/news.dto.js';
import { userRepository } from './index.js'

class NewsRepository {
  async create(dto, user) {

    const userFind = await userRepository.getUserById(user.id);

    const newsData = newsDto(dto, userFind, user.id);

    const newsModel = new NewsModel(newsData);

    await newsModel.save();

    newsModel.id = newsModel._id.toString();

    await newsModel.save();

    const news = await NewsModel.find({});

    return news;
  };

  async getAllNews() {
    const news = NewsModel.find({});

    return news;
  }

  async update(dto, id) {

    const newsData = newsDto(dto);
    
    // const news = NewsModel.findById({ _id: id });

    // const updatedNews = UserModel.findOneAndUpdate({_id: id}, {
    //   text: dto.text,
    //   title: dto.title,
    // });

    // const allNews = await NewsModel.find({});
    // return allNews;
  }

  async delete(id) {
    const newsDelete = NewsModel.deleteOne({_id: id});

    return newsDelete;
  };
};



export const newsRepository = new NewsRepository();