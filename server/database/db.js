import mongoose from "mongoose";





const Connection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@critic-app.oalopra.mongodb.net/?retryWrites=true&w=majority`

    try{

        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully !')

    } catch (error) {
        console.log('Erro while connecting database', error)

    }
}

export default Connection;