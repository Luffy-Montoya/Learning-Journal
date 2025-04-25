let viewMore = document.getElementById("view-more-link")

viewMore.addEventListener("click", viewMoreBlogs)

let viewMoreOn = false

function viewMoreBlogs() {
    document.getElementById("blog-4").classList.toggle("hidden")
    document.getElementById("blog-5").classList.toggle("hidden")
    document.getElementById("blog-6").classList.toggle("hidden")
    console.log("clicked!")

    if (viewMoreOn === false) {
        viewMore.innerHTML = "View Less"
        viewMoreOn = true
    } else {
        viewMore.innerHTML = "View More"
        viewMoreOn = false
    }
}
