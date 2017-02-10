new Vue ({
    el:'#comments',
    data:{
        newpath: new DummyStore,
        correctObj: {}
    },
    methods: {
        correctAnswer: (commentId) => 
        {
        var tempObj = 
        this.newpath.arr.find(comment => {return comment.id === commentId})
        this.correctObj = tempObj

        }
        
    },
    computed:{
        comments(){
            this.newpath.comments
        },
    },
    


})