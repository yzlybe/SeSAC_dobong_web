const Comment = require("../model/Comment"); // commentsInfo()의 return값이 배열이다
/* 
controller에서는 model에서 받은 데이터를 가공해서
view에 전달할 수 있어요
*/

// localhost:8080/

// GET /
exports.main = (req, res) => {
  res.render("index");
};
// router.get("/", (req, res) => {
//   res.render("index");
// });

// GET /comments
exports.comments = (req, res) => {
  const comments = Comment.commentsInfo();
  console.log(comments);
  res.render("comments", { commentInfo: comments });
};
// router.get("/comments", (req, res) => {
//   console.log(comments);
//   res.render("comments", { commentInfo: comments });
// });

// GET /comment/:id (params 사용) >> comment.ejs
exports.comment = (req, res) => {
  console.log(req.pararms);
  const commentId = req.params.id; // 1, 2, 3, 4
  const comments = Comment.commentsInfo(); // [{}, {}, {}, {}]

  //   if (commentId < 1 || commentId > comments.length) {
  //     return res.render("404");
  //   }

  //   if (isNaN(commentId)) {
  //     return res.render("404");
  //   }

  // 한 번에 처리
  if (!comments[commentId - 1]) return res.render("404");

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
// router.get("/comment/:id", (req, res) => {
//   console.log(req.pararms);
//   const commentId = req.params.id; // 1, 2, 3, 4

//   //   if (commentId < 1 || commentId > comments.length) {
//   //     return res.render("404");
//   //   }

//   //   if (isNaN(commentId)) {
//   //     return res.render("404");
//   //   }

//   // 한 번에 처리
//   if (!comments[commentId - 1]) return res.render("404");

//   res.render("comment", { commentInfo: comments[commentId - 1] });
// });
