/**
 * Created by Tristan on 05/12/2014.
 */
var app = angular.module('themes',[]);

app.controller("themeController", function () {
    this.lesthemes = [{nom : "Famine",description : "In 2014 feeding your family can still be struggle for million of man and women.",img : "http://cache.inthedays.com.s3.amazonaws.com/wp-content/uploads/2012/08/r-56.jpeg"},
        {nom : "Natural Catastrophies",description : "Because none of us are protect from mother natures caprices.",img : "http://3.bp.blogspot.com/-J6yNojy8UcQ/TqriFBmmI1I/AAAAAAAAAaQ/kpVjPUe5ebI/s1600/india_cyclon_natural_disaster.jpg"},
        {nom : "Orphans",description : "No child should live without their parents, we need to help them.",img : "http://www.caribpress.com/wp-content/uploads/2013/12/Charity-Organization-seeking-donation-for-Orphans-in-Haiti.jpg"},
        {nom : "EBOLA",description : "Today's biggest threat for Humanity.",img : "http://www.cdc.gov/vhf/ebola/modules/flexslider/about-ebola.jpg"},
        {nom : "HIV",description : "Anyone can be infected today, and yet no one has a cure for this terrible infection.",img : "http://static.dnaindia.com/sites/default/files/2014/11/28/287907-hiv.jpg"},
        {nom : "Homelessness",description : "Even thought we see them everyday, no one seems to help our fellow community members. ",img : "http://vibewire.org/wp-content/uploads/2012/05/Homeless-Youth.jpg"}

    ];

});
app.controller("cause1Controller", function(){
    this.lescause1=[{nom:"Nigerian Orphans", description:"They went thought wars and population displacement.", img:"http://1.bp.blogspot.com/-_pI7H5px248/UQH3SmG7xtI/AAAAAAAAAgE/Gi-4ReLhrnk/s300/MISSION%2BTRIP%2BJAN.%2B2006%2BNO.2%2B072.JPG"},
        {nom:"Orphans houses in the US", description:"No child can be left behind, we need, as a country, to help our child. They are the ones in need.", img:"http://kirk.senate.gov/images/flag.jpg"},
            {nom:"Code Orphans", description:"Coding can be the best way for children to get a stable situation. By educating they we will help them to turn their life around.", img:"http://www.gscdn.org/library/cms/11/12611.JPG"},
                {nom:"Toys for Thai Orphans", description:"Help us to bring a smile on their faces! They need it more than any one.", img:"http://globalservicecorps.org/user-uploads/basicpage-custom-imgs/two_young_students.jpg"},
                    {nom:"Adoption training", description:"Because adopting an orphan is not that simple. We can help more couples to become the loved one of a special kid.", img:"http://www.gordontraining.com/wp-content/themes/gordon/images/PET-page.jpg"},
                        {nom:"Baseball Team", description:"Playing catch with your father is probably one of your best memories, give orphans from your community a chance to experience this special joy.", img:"http://www.meinmaine.com/wp-content/uploads/2010/06/mooersrealtylittleleague-2.jpg"}

    ];

});
