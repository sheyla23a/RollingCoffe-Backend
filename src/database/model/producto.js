import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 25
    },
    precio:{
        type:Number,
        required: true,
        minLength:2,
        maxLength:4
    },
    imagen:{
        type:String,
        required: true,
        //validar URL de imagen con una expresion regular
    },
    descripcionBreve:{
        type: String,
        required:true,
        minLength:10,
        maxLength:50
    },
    descripcionAmplia:{
        type: String,
        required:true,
        minLength:50,
        maxLength:300
    },
    categoria:{
        type: String,
        required:true,
        enum: ['Infusion','Bebida_Fria','Batidos']
    }
})

const Producto = mongoose.model('producto',productoSchema);

export default Producto;