const express = require('express');
const app = express();
const port = 3000;
const ffmpeg = require('fluent-ffmpeg');

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.use(express.static('public'));

app.get('/process-video', (req, res) => {
    const pathToImages = './CoinVideo/%03d.png';
    const outputPath = './public/video/coin.webm';
    let responseSent = false; 


    ffmpeg(pathToImages)
        .inputFPS(24)
        .addOptions([
            '-c:v libvpx-vp9',
            '-pix_fmt yuva420p'
        ])
        .on('end', () => {
            if(!responseSent){
                console.log('Video porocesado con exito.');
                responseSent = true; 
                res.download(outputPath);
            }
            
        })
        .on('error', (err) => {
            console.error('Error procesando el video: ', err.message);
            if(!responseSent){
                responseSent = true;
                res.status(500).send('Error al procesar el video')
            }
        })
        .save(outputPath);
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})