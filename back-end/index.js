import dotenv from 'dotenv';
import db from './connection/mongoDB.js'
import Express from 'express'
import Cors from 'cors';
import rutasClientes from './views/clientes.js';
import rutasProductos from './views/productos.js';
import rutasUsuarios from './views/usuarios.js';
db()


const app = Express();
dotenv.config({ path: './.env' });


app.use(Cors())
app.use(Express.json())
app.use(rutasClientes)
app.use(rutasProductos)
app.use(rutasUsuarios)

//correr el servidor
const PORT= process.env.PORT;
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

