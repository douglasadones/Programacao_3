const express = require('express'); // importanto a biblioteca instalada

const app = express();
const port = 8000

app.get('/', (request, response) => {
    response.send('<h1>Hello, World!</h1>');
});  // app.get(url, )

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})