const md5 = require('md5');
const dayjs = require('dayjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        id: 1,
        username: 'mt',
        password: md5('123456'),
        disabled: false,
        mobile: '13000000000',
        email: 'mt@meishi.com',
        created_ip_at: '127.0.0.1',
        updated_ip_at: '127.0.0.1',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 2,
        username: 'zmouse',
        password: md5('123456'),
        disabled: false,
        mobile: '13000000001',
        email: 'zmouse@meishi.com',
        created_ip_at: '127.0.0.1',
        updated_ip_at: '127.0.0.1',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 3,
        username: 'reci',
        password: md5('123456'),
        disabled: false,
        mobile: '13000000002',
        email: 'reci@meishi.com',
        created_ip_at: '127.0.0.1',
        updated_ip_at: '127.0.0.1',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        id: 4,
        username: 'kimoo',
        password: md5('123456'),
        disabled: false,
        mobile: '13000000003',
        email: 'kimoo@meishi.com',
        created_ip_at: '127.0.0.1',
        updated_ip_at: '127.0.0.1',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
