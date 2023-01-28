const posts = [
    { title: 'Post one', body: 'This is post one'},
    { title: 'Post two', body: 'This is post one'}
];


function getPosts() {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('posts').innerHTML = output;
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);
