const getOpenId = require('./getOpenId/index');
const getMiniProgramCode = require('./getMiniProgramCode/index');
const createCollection = require('./createCollection/index');
const selectRecord = require('./selectRecord/index');
const updateRecord = require('./updateRecord/index');
const sumRecord = require('./sumRecord/index');
const passwordAdd = require('./passwordAdd/index');
const passwordQuery = require('./passwordQuery/index');
const userPasswordQuery = require('./userPasswordQuery/index');
const userPasswordAdd = require('./userPasswordAdd/index');


// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getOpenId':
      return await getOpenId.main(event, context);
    case 'getMiniProgramCode':
      return await getMiniProgramCode.main(event, context);
    case 'createCollection':
      return await createCollection.main(event, context);
    case 'selectRecord':
      return await selectRecord.main(event, context);
    case 'updateRecord':
      return await updateRecord.main(event, context);
    case 'sumRecord':
      return await sumRecord.main(event, context);
    case 'passwordAdd':
      return await passwordAdd.main(event, context);
    case 'passwordQuery':
      return await passwordQuery.main(event, context);
    case 'userPasswordQuery':
      return await userPasswordQuery.main(event, context);
    case 'userPasswordAdd':
      return await userPasswordAdd.main(event, context);
  }
};
