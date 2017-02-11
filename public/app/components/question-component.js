new Vue ({
    el:'#question',
    data:{
        dummypath: new DummyStore,
        comments: [],
        text: ''
    },
    methods:{
        addComment: (comment) => this.comments.push(comment),
        toggleVote: (userId, num) => {
            if( userval === bval){
                return userval = 0
            }
            else {
                return userval = bval
            }
        }
    }



})