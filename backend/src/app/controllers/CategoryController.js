import Meetup from '../models/Meetup';

class CategoryController {
  async index(req, res) {
    const categoryArticle = await Meetup.findAll({
      where: { category: req.params.category },
    });

    return res.json(categoryArticle);
  }
}

export default new CategoryController();
