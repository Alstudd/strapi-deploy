'use strict';

/**
 * core-member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::core-member.core-member');
