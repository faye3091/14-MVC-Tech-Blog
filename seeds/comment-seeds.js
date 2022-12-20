const { Cookie } = require('express-session');
const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: "This is so great!"
    }, {
        user_id: 2,
        post_id: 1,
        comment_text: "Awesome! Now I can be organized!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;