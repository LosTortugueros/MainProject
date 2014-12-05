/**
 * Created by Tristan on 05/12/2014.
 */
var app = angular.module('themes',[]);

app.controller("themeController", function () {
    this.lesthemes = [{nom : "Famine",description : "",img : "http://cache.inthedays.com.s3.amazonaws.com/wp-content/uploads/2012/08/r-56.jpeg"},
        {nom : "Natural Catastrophies",description : "",img : "http://3.bp.blogspot.com/-J6yNojy8UcQ/TqriFBmmI1I/AAAAAAAAAaQ/kpVjPUe5ebI/s1600/india_cyclon_natural_disaster.jpg"},
        {nom : "Orphans",description : "",img : "http://www.caribpress.com/wp-content/uploads/2013/12/Charity-Organization-seeking-donation-for-Orphans-in-Haiti.jpg"},
        {nom : "EBOLA",description : "",img : "http://www.cdc.gov/vhf/ebola/modules/flexslider/about-ebola.jpg"},
        {nom : "HIX",description : "",img : "http://static.dnaindia.com/sites/default/files/2014/11/28/287907-hiv.jpg"},
        {nom : "Homelessness",description : "",img : "http://vibewire.org/wp-content/uploads/2012/05/Homeless-Youth.jpg"}

    ];

})
