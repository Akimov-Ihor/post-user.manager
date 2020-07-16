<template>
  <div class="WrapperPostInfo">
    <div class="PostWrapper">
      <h2>{{post.title}}</h2>
      <div class="postBody">{{post.body}}</div>
    </div>
    <div class="commentsWrapper">
      <h3>Comments:</h3>
      <div class="commentsWrapperCenter">
        <div class="comments" v-for="comment of comments" :key="comment.id">
          <div class="commentsAuthor">
            <p>Email:{{comment.email}}</p>
            <p>Name:{{comment.name}}</p>
          </div>
          <hr />
          <div class="commentsAuthorMessage">
            <p>{{comment.body}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    post() {
      const id = this.$route.params.id;
      return this.$store.state.post.posts.filter(p => p.id === Number(id))[0];
    },
    comments() {
      const id = this.$route.params.id;
      return this.$store.state.post.comments.filter(
        p => p.postId === Number(id)
      );
    }
  }
};
</script>


<style scoped>
.WrapperPostInfo {
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}
.PostWrapper {
  width: 75%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 2rem;
}
.postBody {
  width: 70%;
}
.commentsWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.commentsWrapperCenter {
  width: 60%;
  color: black;
  background: #0801010a;
}
.comments {
  display: flex;
  width: 100%;
}
.commentsAuthor {
  width: 40%;
}
.commentsAuthorMessage {
  width: 60%;
}

@media (min-width: 2000px) {
  .PostWrapper > h2 {
    font-size: 7rem;
  }
  .postBody {
    font-size: 4rem;
  }
  .commentsWrapperCenter {
    width: 78%;
    font-size: 2rem;
  }
}
@media (min-width: 1400px) {
  .PostWrapper > h2 {
    font-size: 3rem;
  }
  .postBody {
    font-size: 2rem;
  }
  .commentsWrapperCenter {
    width: 78%;
    font-size: 1rem;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .PostWrapper > h2 {
    font-size: 3rem;
  }
  .postBody {
    font-size: 2rem;
  }
  .commentsWrapperCenter {
    width: 78%;
    font-size: 1rem;
  }
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
  .commentsWrapperCenter {
    width: 95%;
    font-size: 1rem;
  }
}
/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  .PostWrapper > h2 {
    font-size: 1rem;
    margin-top: 7%;
  }
  .PostWrapper {
    height: 34%;
    font-size: 1rem;
  }

  .commentsWrapperCenter {
    width: 93%;
    font-size: 15px;
  }
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
  .PostWrapper > h2 {
    font-size: 1rem;
    margin-top: 7%;
  }
  .PostWrapper {
    height: 17%;
    font-size: 1rem;
  }

  .commentsWrapperCenter {
    width: 93%;
    font-size: 15px;
  }
}
</style>