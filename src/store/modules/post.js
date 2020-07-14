export default {
    actions: {
        async getPost(ctx) {
            const respons = await fetch('https://jsonplaceholder.typicode.com/posts'
            );
            const posts = await respons.json()

            ctx.commit('updatePost', posts)

        },
        async getAllUsers(ctx){
            const rsp =await fetch('https://jsonplaceholder.typicode.com/users'
            );
            const users=await rsp.json()
            ctx.commit('updateUsers',users)
        }

    },
    mutations: {
        updatePost(state, posts) {

            state.posts = posts
        },
        updateUsers(state, users) {

            state.users = users
        },
         
        createNewPost(state,newPost){
            state.posts.unshift(newPost)
        }
    },
    state: {

        posts: [],
        page:1,
        perPages:10,
        pages:[],
        users:[]

    },
    getters: {

        allPosts(state) {
            return state.posts
        },
        allUsers(state){
            return state.users
        },
        getNumberOfPages (state){
            let numberOfPosts= state.posts
        return Math.ceil(numberOfPosts.length/state.perPages)
        }
    },

}
