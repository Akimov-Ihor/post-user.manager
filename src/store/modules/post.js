import axios from 'axios'
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
       async getAllComments(ctx){
        let rspComments=await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=100' 
        );
        let comments=await rspComments.data
        console.log(comments)
        ctx.commit('updateComments',comments)
       }
    },
    mutations: {
        updatePost(state, posts) {

            state.posts = posts
        },
        updateUsers(state, users) {

            state.users = users
        },
        updateComments(state,comments){
            state.comments=comments
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
    
    },
    state: {
        posts: [],
        page: 0,
        perPages: 10,
        users: [],
        comments:[]
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
        }

    },

}
