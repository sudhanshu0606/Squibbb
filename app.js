import express from "express";
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",async (req,res) => {
    res.send("hello")
})

app.use("/API",Routes)

const PORT = process.env.PORT || 4444
app.listen(PORT,async () => {
    console.log(`Your app is running on http://localhost:${PORT}`)
})