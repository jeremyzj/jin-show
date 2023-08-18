const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();

// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
  // 返回数据库查询结果
  switch (event.type) {
    case 'category':
      return await db.collection('jd_category').get();
    case 'videoIcon':
      return "cloud://cloud1-8gnde99f1c63f90f.636c-cloud1-8gnde99f1c63f90f-1319765993/video5.png";
    case 'microfilm':
      return await db.collection('jd-microfilm').get()
    case 'promotion':
      return await db.collection('jd-promotional').get()
    case 'activity':
      return await db.collection('jd-activity').field({
        _id: true,
        title: true,
        content: true,
        isVideo: true,
        poster: true
      }).get()
  }
};
