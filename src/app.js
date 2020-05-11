import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            items: [
                {name: "Tidy Bedroom", priority: false},
                {name: "Wash Dishes", priority: false},
                {name: "Do Shopping", priority: true}
            ],
            newItem:""
        },
        methods: {
            saveNewItem: function (){
                this.items.push({
                    name: this.newItem,
                    priority: false
                })
                this.newItem ="";
            }
        }
    });
});