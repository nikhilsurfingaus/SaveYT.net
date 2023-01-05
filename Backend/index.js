import { createRequire } from 'module'
const require = createRequire(
    import.meta.url);

const express = require('express')
const ytdl = require('ytdl-core')
const cors = require('cors')

require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express()
app.use(cors())

app.get("/download", async(req, res) => {
    try {
        const url = req.query.url;
        const videoId = await ytdl.getURLVideoID(url);
        const metaInfo = await ytdl.getInfo(url);

        let data = {
            url: "https://www.youtube.com/embed/" + videoId,
            info: metaInfo.formats
        }

        return res.send(data)
    } catch (error) {
        return res.status(500)
    }
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})