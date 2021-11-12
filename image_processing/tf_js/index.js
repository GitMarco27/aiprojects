const webcamelement = document.getElementById('webcam');
let net;

async function app() {
    console.log('Loading MobileNet...');

    net = await mobilenet.load();
    console.log('MobileNet loaded!');
    const webcam = await tf.data.webcam(webcamelement);
    while (true) {
        const img = await webcam.capture();
        const result = await net.classify(img);

        document.getElementById('console').innerText = `
            prediction ${result[0].className}\n
            probability ${result[0].probability}
            
            
            `;
        img.dispose();

        await tf.nextFrame();

    }
}

app();
