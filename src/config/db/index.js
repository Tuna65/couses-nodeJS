const mongoose = require('mongoose');

async function Connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/demo__nodeJS_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('successfully!!');
    } catch (error) {
        console.log('failure!!');
    }
}

module.exports = { Connect };
