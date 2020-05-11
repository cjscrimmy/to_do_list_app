import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            items: [
                {title: "Tidy Bedroom", priority: "high"},
                {title: "Wash Dishes", priority: "low"},
                {title: "Do Shopping", priority: "high"}
            ],
            newItem:""
        },
        methods: {
            saveNewItem: function (){
                this.items.push({
                    title: this.newItem,
                    priority: "high"
                })
                this.newItem ="";
            }
        }
    });
});