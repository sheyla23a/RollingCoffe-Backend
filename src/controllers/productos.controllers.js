import Producto from "../database/model/producto.js";

export const listarProductos =(req,res)=>{
console.log('desde listar productos');
res.send('enviar lista de productos...')
}