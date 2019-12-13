import { Op } from 'sequelize';
import Subscription from '../models/Subscription';
import User from '../models/User';
import Article from '../models/Article';

class SubscriptionController {
  async index(req, res) {
    const Subscriptions = await Subscription.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: Article,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          attributes: ['title', 'desc', 'category', 'date'],
          required: true,
        },
      ],
      order: [[Article, 'date']],
    });

    return res.json(Subscriptions);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const article = await Article.findByPk(req.params.articleId, {
      include: [User],
    });

    if (article.user_id === req.userId) {
      return res
        .status(400)
        .json({ error: "Can't subscribe to you own article" });
    }

    const subscription = await Subscription.create({
      user_id: user.id,
      article_id: article.id,
    });

    return res.json(subscription);
  }
}

export default new SubscriptionController();
