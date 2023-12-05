// smooth scrolling

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
// gsap 

function firstpageanim() {
    var tl = gsap.timeline();

    tl.from('.nav', {
        y: -40,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInout
    })
        .to('.boundingelem', {
            y: 0,
            duration: 0.7,
            ease: Expo.easeInout,
            stagger: .2
        }).to('.herofooter a', {
            y: -40,
            opacity: 1,
            duration: 0.7,
            stagger: 0.2
        })
}

firstpageanim()
// mousetracker

// define mouse tracer width while moving 

function circlescale() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)
        xprev = dets.clientX;
        yprev = dets.clientY;


    })
    circle(xscale, yscale)
}

circlescale()


function circle(xscale, yscale) {
    window.addEventListener("mousemove", (details) => {
        document.querySelector('.minicircle').style.transform = `translate(${details.clientX}px, ${details.clientY}px) 
        scale(${xscale},${yscale})`;
    })
}

circle();


document.querySelectorAll('.elem').forEach((element) => {
    var rotation = 0;
    var difference_of_rotation = 0;





    element.addEventListener('mousemove', (e) => {
        let imghover = element.querySelector('img')
        imghover.style.display = 'block';
        const difference = e.clientY - element.getBoundingClientRect().top;



        difference_of_rotation = e.clientX - rotation;

        rotation = e.clientX

        gsap.to(imghover, {
            ease: Power1,
            top: difference,
            left: e.clientX,
            rotate: gsap.utils.clamp(-20, 20, difference_of_rotation)
        })

    })
    element.addEventListener('mouseleave', () => {
        element.querySelector('img').style.display = 'none'

    })
})

