const Restaurant = require("../models/restaurant");

module.exports = {
  new: newRestaurant,
  create,
  index,
  show,
  delete: deleteRestaurant
};

function newRestaurant(req, res) {
  res.render("restaurants/new", { title: "Add Restaurant", errorMsg: "" });
}

async function create(req, res) {
  // if yearOpened is null, delete and reference default value from model
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    const restaurant = await Restaurant.create(req.body);
    console.log(restaurant);
    res.redirect("/restaurants");
  } catch (err) {
    console.log("create error", err);
    res.render("restaurants/new", { errorMsg: err.message });
  }
}

async function index(req, res) {
  try {
    const restaurants = await Restaurant.find().sort("yearOpened");
    res.render("restaurants/index", { title: "All Restaurants", restaurants });
  } catch (err) {
    console.log("index error", err);
  }
}

async function show(req, res) {
    try {
        // console.log(req.params.id)
        // res.send('testing show page')
        const restaurant = await Restaurant.findById(req.params.id)
        res.render('restaurants/show', {
            title: 'Restaurant Details',
            restaurant
        })
    } catch(err) {
        console.log('show error', err)
    }
}

async function deleteRestaurant(req,res) {
  try {
   await Restaurant.deleteOne()
   res.redirect('/restaurants')
  }
  catch(err){
    console.log('err')
  }
}