const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn")
const memeTitle = document.querySelector(".meme-generator .meme-title")
const generateImage = document.querySelector(".meme-generator img")

const memeAuthor = document.querySelector(".meme-generator .author")


const updateDetails = (url, title, author) => {
    memeTitle.innerHTML = title;
    generateImage.setAttribute("src", url);
    memeAuthor.innerHTML = `meme by: ${author}`;
}


const generateMeme = async (meme) => {
    const memes = await fetch("https://meme-api.com/gimme/wholesomememes") 
    const response = await memes.json()
    updateDetails(response.url, response.title, response.author)

}


generateMemeBtn.addEventListener("click", generateMeme)