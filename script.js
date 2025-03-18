document.getElementById("addPost").addEventListener("click", function() {
    let container = document.querySelector(".container");

    let newPost = document.createElement("div");
    newPost.classList.add("travel-post");

    let img = document.createElement("img");
    img.src = "https://source.unsplash.com/800x500/?travel";
    img.alt = "New Travel Image";

    let title = document.createElement("h2");
    title.innerText = "New Adventure";

    let desc = document.createElement("p");
    desc.innerText = "Just added a new travel experience!";

    newPost.appendChild(img);
    newPost.appendChild(title);
    newPost.appendChild(desc);
    
    container.appendChild(newPost);
});
