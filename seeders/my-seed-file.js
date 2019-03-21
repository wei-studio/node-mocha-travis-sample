'use strict';

const faker = require('faker')
const bcrypt = require('bcrypt-nodejs')

module.exports = {
  up : function (queryInterface, Sequelize) {

    queryInterface.bulkInsert('Users', [{
      name: 'root',
      email: 'root@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      role: 'admin',
      avatar: faker.image.imageUrl(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'user2',
      email: 'user2',
      password: bcrypt.hashSync('user2', bcrypt.genSaltSync(10), null),
      avatar: faker.image.imageUrl(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'user3',
      email: 'user3',
      password: bcrypt.hashSync('user3', bcrypt.genSaltSync(10), null),
      avatar: faker.image.imageUrl(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'user4',
      email: 'user4',
      password: bcrypt.hashSync('user4', bcrypt.genSaltSync(10), null),
      avatar: faker.image.imageUrl(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'user5',
      email: 'user5',
      password: bcrypt.hashSync('user5', bcrypt.genSaltSync(10), null),
      avatar: faker.image.imageUrl(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    queryInterface.bulkInsert('Followships', [{
      userId: 1, // 追隨者
      followingId: 2, // 追蹤者
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 1,
      followingId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 1,
      followingId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 1,
      followingId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      followingId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      followingId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      followingId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    queryInterface.bulkInsert('Tweets', 
      [...Array(10)].map((_,i) => i).map(d =>
      ({
        description: faker.lorem.sentence(),
        userId: Math.floor(Math.random() * 3)+1,
        createdAt: new Date(),
      updatedAt: new Date(),
      })
    ), {});

    queryInterface.bulkInsert('Likes', 
      [...Array(10)].map((_,i) => i).map(d =>
      ({
        userId: Math.floor(Math.random() * 3)+1,
        tweetId: Math.floor(Math.random() * 5)+1,
        createdAt: new Date(),
      updatedAt: new Date(),
      })
    ), {});

    return     queryInterface.bulkInsert('Replies', 
      [...Array(10)].map((_,i) => i).map(d =>
      ({
        userId: Math.floor(Math.random() * 3)+1,
        tweetId: Math.floor(Math.random() * 5)+1,
        comment: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    ), {});
  },

  down : function (queryInterface, Sequelize) {
  }
};