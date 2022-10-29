function remove(){
    const scroll = document.getElementById("react-root");

    function noscroll(e){
        e.preventDefault();
    }

    scroll.removeEventListener("wheel", noscroll);
    console.log("hello!");
}
(function(){
    setInterval(() => {
        remove()
    }, 1000 * 1);
})();