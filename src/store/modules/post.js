// import axios from 'axios'
export default {
    actions: {
        async getPost(ctx) {
            const respons = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12'
            );
            const posts = await respons.json()

            ctx.commit('updatePost', posts)

        },
        async getAllUsers(ctx) {
            const rsp = await fetch('https://jsonplaceholder.typicode.com/users'
            );
            const users = await rsp.json()
            ctx.commit('updateUsers', users)
        },
    //    async getPostBody(ctx){
    //     let {post} = await axios.get('https://jsonplaceholder.typicode.com/posts?id=' + this.$route.params.id )
    //     ctx.commit('getPostBody',post)
    //    }
    },
    mutations: {
        updatePost(state, posts) {

            state.posts = posts
        },
        updateUsers(state, users) {

            state.users = users
        },

        createNewPost(state, newPost) {
            state.posts.push(newPost)
        },
        showNextPosts(state) {
            state.page++
        },

        showPreviousPosts(state) {
            state.page--
        },
        PostBody(state,post){
            state.post=post
        }
    },
    state: {
        posts: [],
        page: 0,
        perPages: 10,
        users: [],
        post:[]
    },
    getters: {

        allPosts(state) {
            return state.posts
        },
        allUsers(state) {
            return state.users
        },
        getNumberOfPage(state) {
            return state.page
        },
        getPageCount(state) {
            let numberOfPosts = state.posts;
            return Math.ceil(numberOfPosts.length / state.perPages);
        },
        paginatedData(state) {
            const start = state.page * state.perPages;
            const end = start + state.perPages;
            const qqq = [...state.posts.reverse()];
            
            return qqq.slice(start, end);
        },
        getPostBodyInfo(state){
            return state.post
        }
    },

}
