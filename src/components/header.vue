<template>
    <div class="main-header">
        <div class="container">
            <router-link :to="'/'" class="logo" ><img src="@/assets/marshall.png" alt="logo"></router-link>
            <input type="checkbox" id="header_check">
            <label for="header_check" class="show_menu_btn"><i class="fa fa-bars"></i></label>
            <ul class="menu">
                <router-link :to="'News'">News</router-link>
                <router-link :to="'Speaker'">Speaker</router-link>
                <router-link :to="'Headphone'">Headphones</router-link>
                <div class="header-search">
                    <form class="search-item">
                        <input type="search" name="" id="">
                        <button><i class="fa fa-search"></i></button>

                    </form>
                </div>

                <label for="header_check" class="hide_menu_btn"><i class="fa fa-times"></i></label>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'Header',
    created() {
        this.$_hide();
    },
    methods:{
        $_hide(){
            var bodyClass = document.body.classList

            window.addEventListener('scroll', function() {
                var st = this.scrollY;

                if (st < 200) {
                    bodyClass.remove('hideUp');
                } else {
                    bodyClass.add('hideUp');
                }
            });
        }
    }
}
</script>