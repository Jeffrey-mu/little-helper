const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 创建集合云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  const {
    add
  } = event;
  if (add.oldPassword) {
    return await db.collection('userPassword').where({
      openid: wxContext.OPENID,
      password: add.oldPassword,
    }).update({
      // data 字段表示需新增的 JSON 数据
      data: {
        password: add.password,
      }
    });
  } else {
    return await db.collection('userPassword').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        openid: wxContext.OPENID,
        password: add.password,
      }
    });

  }


};