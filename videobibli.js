let mouse = document.querySelector(".cursor");
window.addEventListener('mousemove', cursor);

function cursor(e){
    mouse.style.top = e.pageY + 'px'
    mouse.style.left = e.pageX +'px'
}


let navlinks = document.querySelectorAll(".nav-link li")


navlinks.forEach(link => {
    link.addEventListener('mouseover', () =>{
        mouse.classList.add("link-grow");
        link.classList.add("hoverd-link")
        console.log("c est ajouter")
    });
    link.addEventListener('mouseleave', () =>{
        mouse.classList.remove("link-grow");
        link.classList.remove("hovered-link")
        
    });



});

document.getElementById('bouton').addEventListener('click',() =>{

    window.location.href='/Users/mac/Desktop/Projet apprenti web dev/aprenti javascript/conexion service/index.html'
})
document.getElementById('vid').addEventListener('click',() =>{

    window.location.href='/Users/mac/Desktop/Projet apprenti web dev/aprenti javascript/boutonsouris/Videobibli.html'
})