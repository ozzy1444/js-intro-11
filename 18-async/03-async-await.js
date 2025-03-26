function connectToServer() {
    return new Promise((resolve, reject) => {
        const bool = true;
        if(bool) {
            console.log('Connection successful');
            resolve();
        }
        else {
            console.log('Connection Failed');
            reject();
        }
    });
}

async function test1() {
    await connectToServer();
}

test1();