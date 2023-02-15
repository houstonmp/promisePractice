const changeSectionStyle = (el) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(');
            }
            else {
                resolve(`Style updated for ${el}`);
                // document.querySelector(`#${el}`).classList.add(`${el}`);
            }
        }, delay);
    })
}

changeSectionStyle('sect1')
    .then(() => {
        console.log('Style 1 Changed!');
        return changeSectionStyle('sect2');
    })
    .catch(() => {
        console.log(`Error: Style 1 not changed`)
    })
    .then(() => {
        console.log('Style 2 Changed!');
        return changeSectionStyle('sect3');
    })
    .catch(() => {
        console.log(`Error: Style 2 not changed`)
    })
    .then(() => {
        console.log('Style 3 Changed!');
    })
    .catch(() => {
        console.log(`Error: Style 3 not changed`)
    })