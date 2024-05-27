import app from "./server.js"
import mongodb from "mongodb"
// import ReviewsDAO from "./dao/ReviewsDAO.js"

const MongoClient = mongodb.MongoClient
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
const uri = `mongodb+srv://chihoangnguyen2709:<password>@cluster0.u0ogzcp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    app.listen(port, () => {
        console.log(`listen on port ${port}`)
    })
})