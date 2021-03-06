import Vue from 'vue'
import GridView from "../js/GridView";

class WooGridView {

    constructor(selector) {
        this.selector = selector;
        this.container = document.querySelector(selector);
        this.initVue();
    }

    initVue() {
        new Vue({
            el: this.selector,
            runtimeCompiler: false,
            components: {
                GridView,
            }
        });
    }
}

window.WooGridView = WooGridView;

export default WooGridView;
