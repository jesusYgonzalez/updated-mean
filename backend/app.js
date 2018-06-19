const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/posts',(req, res, next) => {
  const posts = [
    { id: 'asdfsaf',
      title: 'fist server post',
      content: 'this is coming from server'
    },
    { id: 'dasfyukuy',
      title: 'second server post',
      content: 'this is coming from server!!'
    }
  ];
  res.status(200).json({
    message: 'posts fetched successfully!',
    posts: posts
  });
});



module.exports = app;

