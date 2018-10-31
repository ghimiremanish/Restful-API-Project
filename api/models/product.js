import { Schema, Types, model } from 'mongoose';

const productSchema = Schema({
    _id: mongoose.Schema.Types.ObjectçId,
    name: String,
    price: Number
});

export default model('Product', productSchema);