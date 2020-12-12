var keystone = require('keystone');
const { Date } = require('keystone/lib/fieldTypes');
var Types = keystone.Field.Types;

var product = new keystone.List('product',{
    app:{name:'title'},
    singular:'product',
    plural:'products',
    autokey:{path:'slug', from:'title', unique:true}
});

product.add({
  title:{type:String, initial:true},
  price:{type:Number},
  qty:{type:Number},
  description:{type:Types.Html, wysiwyg: true, height:360},
  image:{type:Types.CloudinaryImage},
  publishDate:{type:Date, default:Date.now}
});
/*
product.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

product.schema.pre('save', function (next) {
  let event = this;
  if (event.isModified('published') && event.published) {
    this.publishDate = Date.now();
  }
  return next();
});

product.defaultColumns = 'name, startTime, endTime';
*/
product.register();