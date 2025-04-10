window.addEventListener("DOMContentLoaded", () => {
    const getDataWithFetch = async () => {
        const data = await fetch("https://augusto-debug.github.io/PROJETO-FRONT-END-WEB-JAVASCRIPT/aulaDia10-04-25/");
        console.log(data);
        
    }
    getDataWithFetch();
});