const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, default: '', maxLength: 50 },
    description: { type: String, default: '' },
    slug: { type: String, slug: 'name', unique: true },
    createdAt: { type: Date, default: Date.now },
    updateddAt: { type: Date, default: Date.now },
});

Course.plugin(mongooseDelete);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Course);
