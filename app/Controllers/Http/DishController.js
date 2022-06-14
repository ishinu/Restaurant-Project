'use strict'

const Dish= use('App/Models/Dish')

class DishController {

    async home({view}) {

    // 1. Creating a dish

    /*
    const dish=new Dish;
    dish.title='Paneer Chataka';
    dish.link='www.foodie.com';
    dish.description='Fresh paneer with tasty masalas and burning bhatti tandoori roti';
    dish.user_id='0001';

    await dish.save();
    
    */
   
    //2. Showing all dishes

    const dishes= await Dish.all();

    return view.render('index', { dishes : dishes.toJSON() })

    }

    async userIndex({view,auth}){
        const dishes= await auth.user.dishes().fetch();

        return view.render('dishes',{ dishes: dishes.toJSON() });
    }

    async create({ request,response,session,auth }){

        const dish=request.all();

        const posted= await auth.user.dishes().create({
            title: dish.title,
            link: dish.link,
            description: dish.description
        })  

        session.flash({ message:'Your Dish has been Posted!' });
        return response.redirect('back');
    }

    async delete({response,session,params}){
        const dish= await Dish.find(params.id);

        await dish.delete();
        session.flash({message:'Your Dish has been Deleted!'});
        return response.redirect('back');
    }

    async edit ({params,view}){
        const dish= await Dish.find(params.id);
        return view.render('edit',{ dish:dish });
    }

    async update({ response,request,session,params }) {
        const dish= await Dish.find(params.id);

        dish.title=request.all().title;
        dish.link =request.all().link;
        dish.description=request.all().description;

        await dish.save();

        session.flash({message: 'Your Dish is Updated!'});
        return response.redirect('/dishes');
    }


    
}

module.exports = DishController
