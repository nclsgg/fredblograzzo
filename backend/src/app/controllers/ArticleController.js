import * as Yup from 'yup';

import Article from '../models/Article';
import User from '../models/User';

class ArticleController {
  async index(req, res) {
    const where = {};
    const { page = 1 } = req.query;

    const articles = await Article.findAll({
      where,
      include: [User],
      limit: 10,
      offset: 10 * page - 10,
    });

    return res.json(articles);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      desc: Yup.string().required(),
      category: Yup.string().required(),
      file_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const user_id = req.userId;

    const article = await Article.create({
      user_id,
      ...req.body,
    });

    return res.json(article);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      desc: Yup.string(),
      category: Yup.string(),
      file_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid fields' });
    }

    const user_id = req.userId;

    const article = await Article.findByPk(req.params.id);

    if (article.user_id !== user_id) {
      return res.status(400).json({ error: 'Not authorized' });
    }

    await article.update(req.body);

    return res.json(article);
  }

  async delete(req, res) {
    const user_id = req.userId;

    const article = await Article.findByPk(req.params.id);

    if (article.user_id !== user_id) {
      return res.status(400).json({ error: 'Not Authorized' });
    }

    await article.destroy();

    return res.json({ success: 'Deleted' });
  }
}

export default new ArticleController();
