const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    return await db.collection('userPassword').where({
      openid: wxContext.OPENID,
      ...(event.password && {password: event.password})
    }).get();
};
