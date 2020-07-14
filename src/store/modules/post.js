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
        },
        showNextPosts(state){
           state.page++
        },
        
        showPreviousPosts(state){
        //     let numberOfPosts= state.posts;
        //    let pageCount=Math.ceil(numberOfPosts.length/state.perPages);
        //    if (state.page>pageCount){
               state.page--
        }
    },
    state: {

        posts: [],
        page:0,
        perPages:10,
        users:[]

    },
    getters: {
     
        allPosts(state) {
            return state.posts
        },
        allUsers(state){
            return state.users
        },
        getNumberOfPage (state){
        return state.page
        },
        getPageCount(state){
            let numberOfPosts= state.posts;
            return Math.ceil(numberOfPosts.length/state.perPages);
        },
        paginatedData(state){
                const start = state.page * state.perPages,
                      end = start + state.perPages;
                return state.posts.slice(start, end);
         
        }
    },

}
