const { Post } = require('../models');

const postData = [
    {
        title: "Work Day Scheduler Tool is now out!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 1
    },{
        title: "Movie Randomizer is now Available!", 
        post_content: "Randomizes any on the top 250 movies!",
        user_id: 2
    },{
        title: "Weather Dashboard is now Available!", 
        post_content: "I can see the updated weather on any place!",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;