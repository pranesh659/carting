var keystone=require('keystone');

exports=module.exports=function(req,res){
    var view=new keystone.View(req,res);
    var locals=res.locals;

    locals.section='store';
    locals.filters={
        product: req.params.product
    }
    locals.data={
        products:[]
    }

    view.on('init', function(next){
        var q=keystone.list('product').model.findOne({
            slug: locals.filters.product
        });

    q.exec(function(err,result){
        locals.data.product=result;
        next(err);
    });

    });

    view.render('product');
}