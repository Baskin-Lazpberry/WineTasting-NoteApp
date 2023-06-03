import express from "express";

const PORT = 9000;

const app = express();

const handleHome = (req, res) => {
    return res.send("Wine Tasting App");
}

app.get("/", handleHome);

app.listen(PORT, () => {
    console.log(`Server listening to http://localhost:${PORT}`);
})