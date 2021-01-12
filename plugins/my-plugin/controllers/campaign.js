'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * A set of functions called "actions" for `campaign`
 */

module.exports = {
  index: async (ctx) => {
    const res = await strapi.query('campaign', 'my-plugin').find()

    ctx.send(res)
  },
  create: async (ctx) => {
    let entity;

    entity = await strapi.query('campaign', 'my-plugin').create(ctx.request.body);

    ctx.send(entity)
  }
};
