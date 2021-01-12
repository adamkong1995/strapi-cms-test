'use strict';

/**
 * A set of functions called "actions" for `campaign`
 */

module.exports = {
  index: async (ctx) => {
    const res = await strapi.query('campaign', 'my-plugin').find()
    console.log('strapi', res)
    ctx.send({
      message: 'rear'
    })
  }
};
