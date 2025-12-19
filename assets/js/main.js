(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        /* Sticky Header */
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 100) {
                $(".sticky-header").addClass("fixed-top");
            } else {
                $(".sticky-header").removeClass("fixed-top");
            }
        });

        /* Mobile Menu */
        $("#mobile-menu").meanmenu({
            meanMenuContainer: ".mobile-menu",
            meanScreenWidth: "991.99",
            onePage: false,
        });

        /* Counter */
        $(".counter").counterUp({ delay: 10, time: 1000 });

        /* Countdown */
        if ($.fn.downCount && $(".countdown").length) {
    $(".countdown").downCount(
        { date: "10/01/2023 23:59:59", offset: +6 },
        function () {
            console.log("Countdown done!");
        }
    );
}


        /* Popup */
        $(".popup-link").magnificPopup({
            type: "iframe",
            iframe: {
                markup:
                    '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    "</div>",
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "https://www.youtube.com/embed/%id%?autoplay=1",
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1",
                    },
                    gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                },
                srcAction: "iframe_src",
            },
        });

        /* Scroll Up */
        $(".scrollup").on("click", function () {
            $("html").animate({ scrollTop: "0" }, 500);
        });

        $(window).on("scroll", function () {
            if ($("html").scrollTop() > 500) {
                $(".scrollup").fadeIn();
            } else {
                $(".scrollup").fadeOut();
            }
        });

        /* Hero Mouse Move */
        var hoverLayer = $(".hero-area2");
        var heroImgOne = $(".hero-area2 .hero_shapes .vec_1");
        hoverLayer.mousemove(function (e) {
            var valueX = (e.pageX * -1) / 100;
            var valueY = (e.pageY * -1) / 120;
            heroImgOne.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
            });
        });
        /* ⭐ SMOOTH HERO CAROUSEL ⭐ */
function initHeroCarousel() {
    const heroSlider = $('.hero-slider-active');
    if (!heroSlider.length) return;
    
    const slides = heroSlider.find('.hero-area').filter(function () {
    return $.trim($(this).html()).length > 0;
});

    if (slides.length <= 1) return;
    
    // Set initial state
    slides.removeClass('active');
    slides.first().addClass('active');
    
    // Create dots container with higher z-index
    if (!heroSlider.find('.hero-slider-dots').length) {
        heroSlider.append('<ul class="hero-slider-dots"></ul>');
        const dotsContainer = heroSlider.find('.hero-slider-dots');
        
        // Ensure dots are visible
        dotsContainer.css({
            'position': 'absolute',
            'bottom': '40px',
            'left': '50%',
            'transform': 'translateX(-50%)',
            'display': 'flex',
            'gap': '15px',
            'margin': '0',
            'padding': '0',
            'list-style': 'none',
            'z-index': '1000'
        });
        
        // Create dots
        slides.each(function(index) {
            const isActive = index === 0 ? 'active' : '';
            const dot = $(`
                <li class="${isActive}">
                    <button type="button" data-slide="${index}" aria-label="Go to slide ${index + 1}"></button>
                </li>
            `);
            
            // Style the button
            dot.find('button').css({
                'width': '16px',
                'height': '16px',
                'border-radius': '50%',
                'border': '3px solid white',
                'background': index === 0 ? '#fd424d' : 'rgba(255,255,255,0.4)',
                'cursor': 'pointer',
                'padding': '0',
                'font-size': '0',
                'display': 'block',
                'transition': 'all 0.3s ease',
                'box-shadow': '0 2px 5px rgba(0,0,0,0.3)'
            });
            
            dotsContainer.append(dot);
        });
    }
    
    // Variables
    let currentSlide = 0;
    let slideInterval;
    let isTransitioning = false;
    const totalSlides = slides.length;
    
    // Smooth transition function
    function goToSlide(index) {
        if (isTransitioning || index === currentSlide) return;
        
        isTransitioning = true;
        
        // Fade out current slide
        slides.eq(currentSlide).removeClass('active');
        
        // Update dots
        heroSlider.find('.hero-slider-dots li').removeClass('active');
        heroSlider.find('.hero-slider-dots li').eq(index).addClass('active');
        
        // Update dot button colors
        heroSlider.find('.hero-slider-dots button').css('background', 'rgba(255,255,255,0.4)');
        heroSlider.find(`.hero-slider-dots li[data-slide="${index}"] button`).css('background', '#fd424d');
        
        // Wait for fade out, then fade in new slide
        setTimeout(() => {
            currentSlide = index;
            slides.eq(currentSlide).addClass('active');
            
            // Trigger content animations
            const activeSlide = slides.eq(currentSlide);
            activeSlide.find('.animate1, .animate2, .animate3').css('animation', 'none');
            
            setTimeout(() => {
                activeSlide.find('.animate1').css('animation', 'fadeInUp 1s ease 0.3s both');
                activeSlide.find('.animate2').css('animation', 'fadeInUp 1s ease 0.6s both');
                activeSlide.find('.animate3').css('animation', 'fadeInDown 1s ease 0.3s both');
                isTransitioning = false;
            }, 50);
        }, 400); // Match CSS transition time
    }
    
    // Next slide function
    function nextSlide() {
        if (isTransitioning) return;
        
        let nextIndex = currentSlide + 1;
        if (nextIndex >= totalSlides) {
            nextIndex = 0;
        }
        goToSlide(nextIndex);
    }
    
    // Previous slide function
    function prevSlide() {
        if (isTransitioning) return;
        
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = totalSlides - 1;
        }
        goToSlide(prevIndex);
    }
    
    // Start autoplay
    function startAutoplay() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000); // 5 seconds
    }
    
    // Stop autoplay
    function stopAutoplay() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }
    
    // Dot click handler
    heroSlider.on('click', '.hero-slider-dots button', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const slideIndex = parseInt($(this).data('slide'));
        if (slideIndex !== currentSlide && !isTransitioning) {
            goToSlide(slideIndex);
            stopAutoplay();
            setTimeout(startAutoplay, 8000); // Restart after 8 seconds
        }
    });
    
    // Keyboard navigation
    $(document).on('keydown', function(e) {
        if (e.key === 'ArrowLeft' && !isTransitioning) {
            prevSlide();
            stopAutoplay();
            setTimeout(startAutoplay, 8000);
        } else if (e.key === 'ArrowRight' && !isTransitioning) {
            nextSlide();
            stopAutoplay();
            setTimeout(startAutoplay, 8000);
        }
    });
    
    // Hover to pause
    heroSlider.hover(
        function() {
            stopAutoplay();
        },
        function() {
            startAutoplay();
        }
    );
    
    // Initialize
    startAutoplay();
    
    // Debug functions
    window.heroCarousel = {
        next: nextSlide,
        prev: prevSlide,
        goTo: goToSlide,
        stop: stopAutoplay,
        start: startAutoplay,
        current: () => currentSlide
    };
    
    console.log('Hero carousel initialized with', totalSlides, 'slides');
}

// Initialize when DOM is ready
jQuery(document).ready(function() {
    initHeroCarousel();
});

// Re-initialize after page load
jQuery(window).on('load', function() {
    setTimeout(initHeroCarousel, 300);
});

        /* ⭐ UNIVERSAL MARQUEE FUNCTION ⭐ */
        function initMarquee(trackID, direction = "left", speed = 0.5) {
            const track = document.getElementById(trackID);
            const container = track.parentElement;

            if (!track) {
                console.error(`❌ Track ID "${trackID}" not found`);
                return;
            }

            // Clone all child elements for infinite loop
            const children = Array.from(track.children);
            children.forEach(child => {
                const clone = child.cloneNode(true);
                track.appendChild(clone);
            });

            let position = 0;
            let paused = false;
            let singleWidth = 0;
            
            // Calculate width of first few items to get average item width
            if (children.length > 0) {
                // Get width of first item including margin
                const firstItem = children[0];
                const style = window.getComputedStyle(firstItem);
                const itemWidth = firstItem.offsetWidth;
                const marginRight = parseInt(style.marginRight) || 0;
                const gap = 30; // Your CSS gap value
                singleWidth = itemWidth + gap;
            }

            function animate() {
                if (!paused) {
                    if (direction === "left") {
                        // RIGHT → LEFT
                        position -= speed;
                        
                        // Reset when moved one set width
                        if (Math.abs(position) >= singleWidth * children.length) {
                            position = 0;
                        }
                    } else {
                        // LEFT → RIGHT
                        position += speed;
                        
                        // Reset when moved forward one set width
                        if (position >= 0) {
                            position = -singleWidth * children.length;
                        }
                    }
                    
                    track.style.transform = `translateX(${position}px)`;
                }

                requestAnimationFrame(animate);
            }

            // Set initial position for right direction
            if (direction === "right") {
                position = -singleWidth * children.length;
            }

            // Hover pause
            track.addEventListener("mouseenter", () => paused = true);
            track.addEventListener("mouseleave", () => paused = false);

            // Start animation
            animate();
        }

        /* ⭐ INIT CAROUSELS ⭐ */
        // TEAM → scrolls RIGHT ← LEFT
        initMarquee("teamtrack", "left", 0.7);

        // STUDENT COUNCIL → scrolls LEFT → RIGHT
        initMarquee("studenttrack", "right", 0.7);

        /* ⭐ WINNERS CAROUSEL WITH MODAL ⭐ */
        function initWinnersCarousel() {
            const carouselElement = document.getElementById('carouselExampleAutoplaying');
            
            // Check if carousel exists on page
            if (!carouselElement) {
                return;
            }
            
            // Get all elements
            const progressBar = document.getElementById('carouselProgress');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const carouselItems = document.querySelectorAll('#carouselExampleAutoplaying .carousel-item');
            const imageModal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            const modalPrev = document.getElementById('modalPrev');
            const modalNext = document.getElementById('modalNext');
            const imageCounter = document.getElementById('imageCounter');
            const imageTitle = document.getElementById('imageTitle');
            
            // Variables
            let progress = 0;
            let progressInterval;
            let isPaused = false;
            let autoPlay = true;
            let currentSlideIndex = 0;
            let totalSlides = carouselItems.length;
            const totalTime = 5000; // 5 seconds total
            const updateInterval = 50; // Update every 50ms
            let carousel;
            
            // Initialize Bootstrap carousel ONLY if not already initialized
            try {
                if (typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
                    carousel = new bootstrap.Carousel(carouselElement, {
                        interval: false, // Set to false, we'll handle timing ourselves
                        wrap: true,
                        ride: false
                    });
                } else {
                    // Fallback if Bootstrap not loaded
                    console.warn('Bootstrap Carousel not available');
                    return;
                }
            } catch (e) {
                console.error('Error initializing carousel:', e);
                return;
            }
            
            // Start progress bar
            startProgressBar();
            
            // Setup event handlers if elements exist
            if (prevBtn) {
                prevBtn.addEventListener('click', function() {
                    manualSlideChange(-1);
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', function() {
                    manualSlideChange(1);
                });
            }
            
            // Image click to open modal
            carouselItems.forEach((item, index) => {
                const img = item.querySelector('img');
                if (img) {
                    img.addEventListener('click', function(e) {
                        e.stopPropagation();
                        
                        // Get current active slide
                        currentSlideIndex = Array.from(carouselItems).indexOf(document.querySelector('#carouselExampleAutoplaying .carousel-item.active'));
                        
                        // Pause carousel
                        pauseCarousel();
                        
                        // Show modal with current image
                        showModal(currentSlideIndex);
                    });
                }
            });
            
            // Modal navigation arrows
            if (modalPrev) {
                modalPrev.addEventListener('click', function(e) {
                    e.stopPropagation();
                    navigateModal(-1);
                });
            }
            
            if (modalNext) {
                modalNext.addEventListener('click', function(e) {
                    e.stopPropagation();
                    navigateModal(1);
                });
            }
            
            // Close modal on overlay click - ANYWHERE in the modal
            if (imageModal) {
                imageModal.addEventListener('click', function(e) {
                    // Click anywhere to close
                    hideModal();
                    resumeCarousel();
                });
                
                // Prevent clicks inside modal content from closing
                const modalContent = imageModal.querySelector('.image-modal-content');
                if (modalContent) {
                    modalContent.addEventListener('click', function(e) {
                        e.stopPropagation();
                    });
                }
            }
            
            // Functions
            function startProgressBar() {
                if (!progressBar) return;
                
                progress = 0;
                clearInterval(progressInterval);
                
                if (!isPaused && autoPlay) {
                    progressInterval = setInterval(() => {
                        if (!isPaused && progressBar) {
                            progress += (updateInterval / totalTime) * 100;
                            progressBar.style.width = Math.min(progress, 100) + '%';
                            
                            // Only change slide when progress is 100%
                            if (progress >= 100) {
                                if (autoPlay) {
                                    // Reset progress bar
                                    progress = 0;
                                    progressBar.style.width = '0%';
                                    
                                    // Change slide
                                    carousel.next();
                                    
                                    // Restart progress bar after a small delay
                                    setTimeout(() => {
                                        if (!isPaused) {
                                            startProgressBar();
                                        }
                                    }, 50);
                                }
                            }
                        }
                    }, updateInterval);
                }
            }
            
            function resetProgressBar() {
                if (!progressBar) return;
                
                progress = 0;
                progressBar.style.width = '0%';
                clearInterval(progressInterval);
            }
            
            function manualSlideChange(direction) {
                // Reset progress bar
                resetProgressBar();
                
                // Change slide
                if (direction === 1) {
                    carousel.next();
                } else {
                    carousel.prev();
                }
                
                // Restart progress bar after slide transition
                setTimeout(() => {
                    if (!isPaused) {
                        startProgressBar();
                    }
                }, 650); // Wait for slide transition to complete
            }
            
            function pauseCarousel() {
                isPaused = true;
                autoPlay = false;
                clearInterval(progressInterval);
            }
            
            function resumeCarousel() {
                isPaused = false;
                autoPlay = true;
                startProgressBar();
            }
            
            function showModal(index) {
                if (!imageModal || !modalImage) return;
                
                const activeItem = carouselItems[index];
                const imgSrc = activeItem.querySelector('img').src;
                const imgAlt = activeItem.querySelector('img').alt;
                
                // Set modal image
                modalImage.src = imgSrc;
                modalImage.alt = imgAlt;
                
                // Update counter and title
                if (imageCounter) {
                    imageCounter.textContent = `Image ${index + 1} of ${totalSlides}`;
                }
                if (imageTitle) {
                    imageTitle.textContent = imgAlt;
                }
                
                // Show modal
                imageModal.classList.add('active');
                document.body.classList.add('modal-active');
                
                // Pause carousel if not already paused
                if (!isPaused) {
                    pauseCarousel();
                }
            }
            
            function hideModal() {
                if (!imageModal) return;
                
                imageModal.classList.remove('active');
                document.body.classList.remove('modal-active');
            }
            
            function navigateModal(direction) {
                currentSlideIndex += direction;
                
                // Wrap around
                if (currentSlideIndex < 0) {
                    currentSlideIndex = totalSlides - 1;
                } else if (currentSlideIndex >= totalSlides) {
                    currentSlideIndex = 0;
                }
                
                // Update carousel position
                carousel.to(currentSlideIndex);
                
                // Update modal image
                const newItem = carouselItems[currentSlideIndex];
                const imgSrc = newItem.querySelector('img').src;
                const imgAlt = newItem.querySelector('img').alt;
                
                if (modalImage) {
                    modalImage.src = imgSrc;
                    modalImage.alt = imgAlt;
                }
                if (imageCounter) {
                    imageCounter.textContent = `Image ${currentSlideIndex + 1} of ${totalSlides}`;
                }
                if (imageTitle) {
                    imageTitle.textContent = imgAlt;
                }
                
                // Reset progress bar for new slide
                resetProgressBar();
            }
            
            // Bootstrap carousel events - update current index
            carouselElement.addEventListener('slide.bs.carousel', function(event) {
                currentSlideIndex = event.to;
            });
            
            carouselElement.addEventListener('slid.bs.carousel', function() {
                // Update current slide index
                currentSlideIndex = Array.from(carouselItems).indexOf(document.querySelector('#carouselExampleAutoplaying .carousel-item.active'));
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                // Modal controls
                if (imageModal && imageModal.classList.contains('active')) {
                    if (e.key === 'Escape') {
                        hideModal();
                        resumeCarousel();
                    } else if (e.key === 'ArrowLeft') {
                        navigateModal(-1);
                    } else if (e.key === 'ArrowRight') {
                        navigateModal(1);
                    }
                }
                // Regular carousel controls
                else {
                    if (e.key === 'ArrowLeft') {
                        manualSlideChange(-1);
                    } else if (e.key === 'ArrowRight') {
                        manualSlideChange(1);
                    }
                }
            });
            
            // Pause on hover (optional)
            carouselElement.addEventListener('mouseenter', function() {
                if (autoPlay && !isPaused) {
                    isPaused = true;
                    clearInterval(progressInterval);
                }
            });
            
            carouselElement.addEventListener('mouseleave', function() {
                if (autoPlay && isPaused) {
                    isPaused = false;
                    startProgressBar();
                }
            });
        }
        
        // Initialize winners carousel
        initWinnersCarousel();

        /* Nav Click */
        $(".sc_nav_wrapper a.nav-link").on("click", function () {
            let dot = $(".line span");
        });

        /* Isotope */
        var $grid = $(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: { columnWidth: 2 },
        });

        $(".filter-button-group").on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
        });
    });

    jQuery(window).on("load", function () {
        new WOW().init();
        $(".preloader").fadeOut(0);
        
        // Reinitialize winners carousel after all content is loaded
        if (typeof initWinnersCarousel === 'function') {
            // Small delay to ensure everything is loaded
            setTimeout(initWinnersCarousel, 100);
        }
    });

})(jQuery);