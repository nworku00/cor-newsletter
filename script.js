console.log("script has loaded");
const blogPosts = [
    {
        title: "The Dangers of Overheating: How to Stay Cool in a Hot Room",
        copy: "Overheating can be a serious problem, especially if you're not used to it. It can lead to dehydration, heat stroke, and other health issues. Here are some tips to stay cool in a hot room: drink plenty of water, wear loose-fitting, light-colored clothing, use a fan or air conditioning if possible, and avoid strenuous activity during the hottest part of the day.",
    },
    {
        title: "Why a Good Night's Sleep Depends on Room Temperature",
        copy: "Did you know that the temperature of your bedroom can affect the quality of your sleep? According to studies, the ideal sleeping temperature is between 60 and 67 degrees Fahrenheit. If your room is too hot, you may have trouble falling asleep or staying asleep. Try using a fan, opening a window, or using an air conditioner to keep your room cool.",
    },
    {
        title: "How to Beat the Heat: Tips for a More Comfortable Room",
        copy: "It's easy to feel uncomfortable in a hot room, but there are things you can do to make it more bearable. Try closing the blinds or curtains during the hottest part of the day to block out the sun.",
    },
    {
        title: "Wow this still sucks it is way too hot",
        copy: "Who ever messed up the thermostat must be found. Not gonna say what we should do to them after but they must be found",
    },
];
let featuredPosts = document.querySelector('.featured-posts')
let regularPosts = document.querySelector(".posts");
createPost = (section, blogArray) => {
    for (let post of blogArray) {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        h3.innerText = post.title;
        p.innerText = post.copy;
        article.append(h3, p);
        section.append(article);
    }
};
createPost(featuredPosts, blogPosts);
featuredPosts.style.backgroundColor = 'lightblue'
featuredPosts.style.border = '5px solid black'

featuredPosts.style.marginBottom = '5px'
createPost(regularPosts, blogPosts);
regularPosts.style.backgroundColor = 'pink'
regularPosts.style.border = '5px solid black'

let firstHead = document.querySelector('main > h3')
firstHead.addEventListener('click', () => { alert('you clicked!') })

firstHead.addEventListener('mouseover', () => {
    console.log('mouse detected')
}, { once: true })
let button = document.querySelector('button')
let hot = document.querySelector('#new')
button.addEventListener('click', createPost(hot,blogPosts))