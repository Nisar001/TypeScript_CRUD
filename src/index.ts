import express from 'express';
import mongoose from 'mongoose';
import routes from './modules/employee/routes/EmployeeRoutes';

const app = express();
app.use(express.json());

const MONGO_URL = "mongodb://localhost:27017";
mongoose.connect(MONGO_URL, {
   dbName: "typescript-crud",
}).then(()=>{
   console.log("Database Connected");
}).catch((error)=>{
   console.log(error)
});

app.use('/api', routes)

app.listen(4000, ()=> {
   console.log(`Server running on http://localhost:4000`);
});