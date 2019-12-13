import Article from '../models/Article';

class CategoryController {
  async index(req, res) {
    const categoryArticle = await Article.findAll({
      where: { category: req.params.category },
    });

    return res.json(categoryArticle);
  }
}

export default new CategoryController();
