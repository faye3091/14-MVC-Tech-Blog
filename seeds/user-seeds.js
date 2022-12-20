const { User } = require('../models');

const userData = [
    {
        username: "john_snow",
        twitter: "jsnow",
        github: "jsnow",
        email: "john_snow.gmail.com",
        password: "ilovemyaunt143"
    },
    {
        username: "deanerys_targaryen",
        twitter: "dtargaryen",
        github: "dtargaryen",
        email: "deanerys_targ.gmail.com",
        password: "iamtherealqueen123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;