const mongoose=require ('mongoose');

const dbName=process.env.DB

mongoose.connect(`mongodb://127.0.0.1:27015/${dbName}`)

.then(()=> {console.log(`Established a connection to Database ${dbName}`)})

.catch(err  => console.log("something went wrong ",err))