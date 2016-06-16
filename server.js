const
  express = require('express')
, port    = process.env.PORT || 2004
, app     = express()

app
.use(express.static(__dirname))
.get('/cv', (req, res) => res.sendFile(__dirname))
.use((req, res) => res.sendFile(__dirname + '/404/index.html'))
.listen(port, () => console.log(`wikipedia-viewer listening on ${port}`))
