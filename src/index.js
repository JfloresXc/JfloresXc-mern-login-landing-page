import app from './config/server';
import database from './config/database'
import dotenv from 'dotenv'

dotenv.config()
database()

app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
})