new Vue ({

    el:'#app',
    data : {
        name: "",
        
        age: ""

    },

    methods :{
        logName: function(){
            alert(this.name);
        },

        logAge: function(){
            alert(this.age);
        }
    }

});