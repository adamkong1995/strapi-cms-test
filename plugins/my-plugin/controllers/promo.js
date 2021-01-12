'use strict';

module.exports = {
  index: async (ctx) => {
    const res = await strapi.query('promo', 'my-plugin').find()
    console.log('strapi', res)
    ctx.send({
      message: 'rear'
    })
  }
};
