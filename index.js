let viewMore = document.getElementById("view-more-link")

viewMore.addEventListener("click", viewMoreBlogs)

function viewMoreBlogs() {
    document.getElementById("blog-4").classList.toggle("hidden")
    document.getElementById("blog-5").classList.toggle("hidden")
    document.getElementById("blog-6").classList.toggle("hidden")
    console.log("clicked!")
}