const { Post } = require('../models');

const postData = [
    {
        title: "Work Day Scheduler Tool is now out!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time"
    },{
        title: "Movie Randomizer is now Available!", 
        post_content: "Randomizes any on the top 250 movies!"
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;