<template>
    <div class="main-header">
        <div class="container">
            <a href="./Homepage.html" class="logo"><img src="@/assets/marshall.png" alt="logo"></a>

            <input type="checkbox" id="header_check">
            <label for="header_check" class="show_menu_btn"><i class="fa fa-bars"></i></label>
            <ul class="menu">
                <a href="./knowus/news.html">News</a>
                <a href="./speakers.html">Speaker</a>
                <a href="./headphone.html">Headphones</a>
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