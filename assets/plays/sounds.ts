

export const PlaySound = (sonido:string) => {
    const sound = new Audio(sonido);
    sound.play();
};