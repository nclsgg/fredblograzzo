import Sequelize, { Model } from 'sequelize';

class Article extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        desc: Sequelize.STRING,
        category: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Subscription, { foreignKey: 'article_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.File, { foreignKey: 'file_id' });
  }
}

export default Article;
