let robot_image = [
    "https://media.istockphoto.com/photos/ai-robot-thinking-picture-id1029035836?b=1&k=20&m=1029035836&s=170667a&w=0&h=QlRcVI9lRB2Mqz4BdGjFtHAlONeHacCBbZGrcr49a-c=",
    "https://cdn1.vectorstock.com/i/1000x1000/33/05/cute-robot-vector-6263305.jpg",
    "https://images.stockfreeimages.com/1803/sfi226w/18037025.jpg",
    "https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Frobot-images-free.html&psig=AOvVaw0cgvwJUTl8ysUTf6layqZx&ust=1643866509471000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDm2oym4PUCFQAAAAAdAAAAABAa",
    "https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Frobot-images-free.html&psig=AOvVaw0cgvwJUTl8ysUTf6layqZx&ust=1643866509471000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDm2oym4PUCFQAAAAAdAAAAABAl",
    "https://thumbs.dreamstime.com/z/toy-robot-22558.jpg",
    
];

const robot_text = [
    "We are the robots!",
    "The robots will take over your browser!",
    "All hail the Motherboard.",
    "We see you, but do you see us?",
    "Robots shall take over the internet."
];

const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * robot_image.length)
    imgs[i].src = robot_image[randomImg];
}

const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++) {
    const randomHeaders = Math.floor(Math.random() * robot_text.length)  
    headers[i].innerText = robot_text[randomHeaders];   
}

