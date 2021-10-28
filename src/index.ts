import express from "express";
import config from "config";
import log from "./logger"
import db from './connectDb';
import { users } from './auth/data/seeders/users';
import { kitchens } from './auth/data/seeders/kitchen';
import { kitchenAssignments } from './auth/data/seeders/kitchenAssignments';


const port = process.env.PORT
const host = process.env.DEV_HOST
const app = express();
// app.use(deserializeUser);

// Parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const createUsers = async () => {
  await kitchenAssignments.map(kitchenAssignment => {
    db.KitchenAssignment.create(kitchenAssignment);
  })
}


createUsers();
db.sequelize.sync().then((value: any) => {
  console.log('🌶  Database connected');
  app.listen(port, () => {
    log.info(`Server listing at http://${host}:${port}`);
  });
})
