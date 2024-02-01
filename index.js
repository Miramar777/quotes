import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));


app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://programming-quotesapi.vercel.app/api/random");
        res.render("index.ejs", {
            quote: result.data.quote,
            author: result.data.author,
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});