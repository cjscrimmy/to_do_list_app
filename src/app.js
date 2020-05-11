import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            items: [
                {name: "Tidy Bedroom", priority: "high"},
                {name: "Wash Dishes", priority: "low"},
                {name: "Do Shopping", priority: "high"}
            ],
            newItem:""
        },
        methods: {
            saveNewItem: function (){
                this.items.push({
                    name: this.newItem,
                    priority: "high"
                })
                this.newItem ="";
            }
        }
    });
});