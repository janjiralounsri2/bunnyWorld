// src/main.css 

// Get the parent container
var swiperWrapper = document.getElementById('swiperWrapper');

// Outer loop for groups
rawData.forEach(function (element, index) {
    // Create a new swiper-slide for the group
    var outerSlide = document.createElement('div');
    outerSlide.className = 'swiper-slide';

    // Set the HTML content of the outer swiper-slide
    outerSlide.innerHTML = ` 
        <div class="swiper-wrapper"> 
        <div class="container-fluid container-main">
        <div class="row">
        <div class="col-12 pa-0">
            <!-- 1 -->
            <div class="row space-between-web">
                <div class="col-xl-5 col-lg-5 col-sm-12">
                    <div class="col-12" id="title-1">
                        <h5 class="text-pre-title">
                            <span id="id_data"> ${element.id} </span> / SPECIES
                        </h5>
                    </div>
        
                    <div class="col-12">
                        <h2 class="text-title-1" id="name_data">
                        ${element.name}
                        </h2>
                    </div>
        
                    <div class="col-12">
                        <hr>
                    </div>
        
                    <div class="col-12 pt-4">
                        <span class="text-location letter-spacing-7"
                            id="desc_data">
                            ${element.description}
                        </span>
                    </div>
                    <div class="col-12 pt-5">
                        <span
                            class="text-location letter-spacing-7">
                            <ion-icon name="location-outline"
                                class="text-icon"></ion-icon>
                            <span
                                class="letter-spacing-7 text-primary-web">
                                Location :
                            </span>
                            <span id="location_data">
                            ${element.location} 
        
                            </span>
                        </span>
                    </div>
                    <div class="col-12 pt-4">
                        <div class="row space-between-web">
                            <div
                                class="col-xl-4 col-lg-4 col-sm-3 border-radius-article">
                                <div class="card-article">
                                    <h5
                                        class="letter-spacing-7 text-primary-web">
                                        Habitat</h5>
                                    <h6 class="pt-3 letter-spacing-7"
                                        id="habitat_data">
                                        ${element.habitat} 
                                    </h6>
                                </div>
                            </div>
                            <div
                                class="col-xl-4 col-lg-4 col-sm-3 border-radius-article">
                                <div class="card-article">
                                    <h5
                                        class="letter-spacing-7 text-primary-web">
                                        Jump Range</h5>
                                    <h6 class="pt-3 letter-spacing-7"
                                        id="jumprange_data">
                                        ${element.jumprange} </h6>
                                </div>
                            </div>
                            <div
                                class="col-xl-4 col-lg-4 col-sm-3 border-radius-article">
                                <div class="card-article">
                                    <h5
                                        class="letter-spacing-7 text-primary-web">
                                        Running Speed</h5>
                                    <h6 class="pt-3 letter-spacing-7"
                                        id="runningspeed_data">
                                        ${element.runningspeed}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div class="col-12 pt-4" id="dataContainer${element.id}">
                        <div class="row space-between-web pt-3" id="food_loop${element.id}">
                        
                        </div>
                    </div> 
                </div> 
                <div class="col-xl-6 col-lg-6 col-sm-12">
                    <section class="tranding-section" id="tranding${element.id}">
                        <div class="container-fluid" >
                            <div class="swiper tranding-slider">
                                <div class="swiper-wrapper" id="innerSwiperWrapperImg${element.id}">
                                    
                                </div>
                            </div>
                            <div class="tranding-slider-control" id="swiper${element.id}">
                                <div class="swiper-button-prev slider-arrow">
                                        <ion-icon name="arrow-back-outline">
                                        </ion-icon> 
                                </div>
                                <div class="swiper-button-next slider-arrow">
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </div>
        </div>  
        </div>
    `;

    swiperWrapper.appendChild(outerSlide);

    // img
    // Get the inner swiper-wrapper for the current group
    // var innerSwiperWrapper = document.getElementById(`innerSwiperWrapper${element.id}`);
    var innerSwiperWrapper = document.getElementById(`innerSwiperWrapperImg${element.id}`);
    // Outer loop for groups 
    // Inner loop for items inside the group
    element.imgmain.forEach(function (innerItem) {
        // Create a new swiper-slide for each item

        var innerSlide = document.createElement('div');
        innerSlide.className = 'swiper-slide id="idMain${innerItem.id}"';

        // Set the HTML content of the inner swiper-slide 
        innerSlide.innerHTML = `
                            <div class="swiper-slide tranding-slide" >
                                <div class="tranding-slide-img" id="loop_img_main">
                                    <img src="${innerItem.img}" alt="Tranding">
                                </div>
                            </div>
        `;
        // Append the inner swiper-slide to the inner swiper-wrapper
        innerSwiperWrapper.appendChild(innerSlide);
        // console.log(innerSlide)
    });


    // food
    var food_loop = document.getElementById(`food_loop${element.id}`);
    // Outer loop for groups
    element.food.forEach(function (elementFood, indexFood) {
        var outerSlideFood = document.createElement('div');
        outerSlideFood.className = 'col-xl-3 col-lg-3 col-sm-2 border-round-article-border';

        outerSlideFood.innerHTML = `
                                <div class="border-round-article">
                                    <img src="${elementFood.img}" alt="" class="img-article">
                                </div>
                                <h6 class="letter-spacing-7 mt-3 font-weight-b"
                                    id="title_data_1">
                                    ${elementFood.title}
                                </h6>`;
        food_loop.appendChild(outerSlideFood);
    });
 
});
 
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 3,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

