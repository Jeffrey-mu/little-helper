const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 创建集合云函数入口函数
exports.main = async (event, context) => {
    // 创建集合
    const wxContext = cloud.getWXContext();
    return await db.collection('password').where({
      openid: wxContext.OPENID,
    }).get();
};
