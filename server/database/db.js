import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.c6e1s.mongodb.net:27017,cluster0-shard-00-01.c6e1s.mongodb.net:27017,cluster0-shard-00-02.c6e1s.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-ql6bvh-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;