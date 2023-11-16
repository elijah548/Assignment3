let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with workout model

let Workout = require('../models/workout');
const workout = require('../models/workout');
/* CRUD Operation*/

/* Read Operation */
/* Get route for the workout list */

router.get('/', async (req, res, next) => { // Mark function as async
    try {
       const Workoutlist = await Workout.find(); // Use of await keyword to fetch data
       res.render('workout', {  // Render the page with fetched data
          title: 'Workout List', 
          Workoutlist: Workoutlist
       });
    } catch (err) {
       console.error(err);  // Log the error
       res.render('workout', {  // Render the page with an error message
          error: 'Error on server'
       });
    }
});

/* Add Operation */
/* Get route for displaying the Add-Page -- Create Operation */
router.get('/add', async (req, res, next) => {
   res.render('/add',{title:'Add workout'})
});
/* Post route for processing the Add-Page -- Create Operation */
router.post('workout/add', async (req, res, next) => {
   let newWorkout = Workout ({
      "name":req.body.name,
      "sets":req.body.sets,
      "reps":req.body.reps,
      "description":req.body.description,
      "rest":req.body.rest
   });
   Workout.create(newWorkout,(err,Workout) => {
      if(err)
      {
         console.log(err);
         res.end(err);
      }
      else 
      {
         res.redirect('/add')
      }
   });
});
/* Edit Operation */
/* Get route for displaying the Edit Operation -- Update Operation */
router.get('/edit/:id', async (req, res, next) => {
   let id = req.params.id;
   Workout.findById(id,(err,workoutToEdit) =>{
      if(err)
      {
         console.log(err);
         res.end(err);
      }
      else
      {
         res.render('workout/edit',{title:'Edit Workout', Workout:workoutToEdit});
      }
   }); 
   
});
/* Post route for displaying the Edit Operation -- Update Operation */
router.post('/edit/:id', async (req, res, next) => {
   let id=req.params.id;
   let updateWorkout = Workout({
      "_id":id,
      "name":req.body.name,
      "sets":req.body.sets,
      "reps":req.body.reps,
      "description":req.body.description,
      "rest":req.body.rest
   });
   Workout.updateOne({_id:id},updateWorkout,(err) =>{
      if(err)
      {
         console.log(err);
         res.end(err);
      }
      else
      {
         res.redirect('workout') 
      } 
   });
});

/* Delete Operation */
/* Get to perform Delete Operation -- Deletion */
router.get('/delete/:id', async (req, res, next) => {
   let id =req.params.id;
   Workout.remove({_id:id},(err)=>{
      if(err)
      {
         console.log(err);
         res.end(err);
      }
      else
      {
         res.redirect('workout')
      }  
   })
});

module.exports=router;