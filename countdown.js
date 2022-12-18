const nextYear = new Date().getFullYear()+1;
const currentYear = new Date(`January 01 ${nextYear} 00:00:00`);

const updateCount = () => {
    const currentTime = new Date();
    const subtract = (currentYear - currentTime) / 1000;
    const day = Math.floor(subtract/3600/24);
    const hour = Math.floor(subtract/3600) % 24;
    const min = Math.floor(subtract/60) % 60;
    const sec = Math.floor(subtract) % 60;


    console.log({day, hour, min, sec});
}

setInterval(updateCount, 1000);

