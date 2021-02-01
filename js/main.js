new Vue ({
    el: '#app',
    data: {
        tab: 'shini',
        isSearch: false,
        showFilters: false
    },
    methods: {
        tabs: function (item) {
            this.tab = item
        },
        showFilter: function () {
            this.showFilters = !this.showFilters
        }
    }
})

$(window).on('load resize', function(){
    if ($(window).width() <= 1200) {
      $('.mobile__filters').html($('.mobile__filters_add'))
    }
});
