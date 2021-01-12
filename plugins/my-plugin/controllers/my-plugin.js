'use strict';

/**
 * my-plugin.js controller
 *
 * @description: A set of functions called "actions" of the `my-plugin` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.
    console.log('run')

    return 'test'
    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  }
};
