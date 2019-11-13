// =============================================
// IMPORTS
// =============================================
const mongoose = require('mongoose');
const express = require("express");
const app = express();
// =============================================
// APP SETTINGS
// =============================================
app.use(express.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' ));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
// =============================================
// CONNECT TO DATABASE (remember to rename)
// =============================================
mongoose.connect('mongodb://localhost/tasks');
// =============================================
// SCHEMA
// =============================================

const TaskSchema = new mongoose.Schema({
    title: { type: String,
        minlength: 3
    },
    description: { type: String,
        minlength: 3
    },
    completed: { type: Boolean, 
        default: false
    }
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})



const Task = mongoose.model('Task', TaskSchema);


app.get('/tasks', (request, response) => {
    Task.find({})
        .then(tasks => response.json(tasks))
        .catch(err => response.json(err));

});

app.get('/tasks/:id', (request, response) => {
    console.log(request.params.id)
    Task.find({_id:request.params.id})
        .then(task => response.json(task))
        .catch(err => response.json(err));

});

app.put('/tasks/:id', (request, response) => {
    
    Task.updateOne({_id:request.params.id}, {$set: request.body})
        .then(task => response.json(task))
        .catch(err => response.json(err));

});

app.delete('/tasks/:id', (request, response) => {
    
    Task.deleteOne({_id:request.params.id}, {$set: request.body})
        .then(task => response.json(task))
        .catch(err => response.json(err));

});

app.delete('/tasks/', (request, response) => {
    
    Task.deleteMany({description:""})
        .then(task => response.json(task))
        .catch(err => response.json(err));

});


app.post('/tasks', (request, response) => {
        Task.create(request.body)
            .then(tasks => response.json(tasks))
            .catch(err => response.json(err)); 
    
});


app.listen(8000, () => console.log("listening on port 8000"));

