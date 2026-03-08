function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // IMPORTANT: This line ensures ScrollTrigger knows how Locomotive is moving
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
loco();






var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



function canvas() {
    const canvas = document.querySelector("#page3>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
            ./frames00007.png
            ./frames00010.png
            ./frames00013.png
            ./frames00016.png
            ./frames00019.png
            ./frames00022.png
            ./frames00025.png
            ./frames00028.png
            ./frames00031.png
            ./frames00034.png
            ./frames00037.png
            ./frames00040.png
            ./frames00043.png
            ./frames00046.png
            ./frames00049.png
            ./frames00052.png
            ./frames00055.png
            ./frames00058.png
            ./frames00061.png
            ./frames00064.png
            ./frames00067.png
            ./frames00070.png
            ./frames00073.png
            ./frames00076.png
            ./frames00079.png
            ./frames00082.png
            ./frames00085.png
            ./frames00088.png
            ./frames00091.png
            ./frames00094.png
            ./frames00097.png
            ./frames00100.png
            ./frames00103.png
            ./frames00106.png
            ./frames00109.png
            ./frames00112.png
            ./frames00115.png
            ./frames00118.png
            ./frames00121.png
            ./frames00124.png
            ./frames00127.png
            ./frames00130.png
            ./frames00133.png
            ./frames00136.png
            ./frames00139.png
            ./frames00142.png
            ./frames00145.png
            ./frames00148.png
            ./frames00151.png
            ./frames00154.png
            ./frames00157.png
            ./frames00160.png
            ./frames00163.png
            ./frames00166.png
            ./frames00169.png
            ./frames00172.png
            ./frames00175.png
            ./frames00178.png
            ./frames00181.png
            ./frames00184.png
            ./frames00187.png
            ./frames00190.png
            ./frames00193.png
            ./frames00196.png
            ./frames00199.png
            ./frames00202.png
        `;
        
        // Clean the string and add the assets path
        const frames = data.trim().split("\n").map(line => {
            const filename = line.trim().replace("./", ""); 
            return `./assets/${filename}`;
        });

        return frames[index]; // Return the cleaned path at that index
    }

    const frameCount = 66; // Your list actually has 66 frames

    const images = [];
    const imageSeq = {
        frame: 0, // Start at index 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#page3`, // Changed from #page to #page3 to match your HTML
            start: `top top`,
            end: `300% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[0].onload = render; // Render first frame as soon as it loads

    function render() {
        if (images[imageSeq.frame]) {
            scaleImage(images[imageSeq.frame], context);
        }
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }

    // This pins page3 while the user scrolls through the 600% distance
    ScrollTrigger.create({
        trigger: "#page3",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `300% top`, // Keep this the same as the gsap.to end
    });
}
canvas();




var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})


gsap.to("#page4>h1>span",{
    scrollTrigger:{
        trigger:`#page4>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})

function canvas1() {
    const canvas = document.querySelector("#page5>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
            ./bridges00004.png
            ./bridges00010.png
            ./bridges00013.png
            ./bridges00016.png
            ./bridges00019.png
            ./bridges00022.png
            ./bridges00025.png
            ./bridges00028.png
            ./bridges00031.png
            ./bridges00034.png
            ./bridges00037.png
            ./bridges00040.png
            ./bridges00043.png
            ./bridges00046.png
            ./bridges00049.png
            ./bridges00052.png
            ./bridges00055.png
            ./bridges00058.png
            ./bridges00061.png
            ./bridges00064.png
            ./bridges00067.png
            ./bridges00070.png
            ./bridges00073.png
            ./bridges00076.png
            ./bridges00079.png
            ./bridges00082.png
            ./bridges00085.png
            ./bridges00088.png
            ./bridges00091.png
            ./bridges00094.png
            ./bridges00097.png
            ./bridges00100.png
            ./bridges00103.png
            ./bridges00106.png
            ./bridges00109.png
            ./bridges00112.png
            ./bridges00115.png
            ./bridges00118.png
            ./bridges00121.png
            ./bridges00124.png
            ./bridges00127.png
            ./bridges00130.png
            ./bridges00133.png
            ./bridges00136.png
            ./bridges00139.png
            ./bridges00142.png
            ./bridges00145.png
            ./bridges00148.png
            ./bridges00151.png
            ./bridges00154.png
            ./bridges00157.png
            ./bridges00160.png
            ./bridges00163.png
            ./bridges00166.png
            ./bridges00169.png
            ./bridges00172.png
            ./bridges00175.png
            ./bridges00178.png
            ./bridges00181.png
            ./bridges00184.png
            ./bridges00187.png
            ./bridges00190.png
            ./bridges00193.png
            ./bridges00196.png
            ./bridges00199.png
            ./bridges00202.png
        `;
        
        // Use .filter(Boolean) to remove empty lines caused by extra whitespace
        const frames = data.trim().split("\n").map(line => line.trim()).filter(Boolean);
        const filename = frames[index].replace("./", ""); 
        return `./assets/${filename}`;
    }

    const frameCount = 66; 
    const images = [];
    const imageSeq = { frame: 0 };

    // Preload images properly
    let imagesLoaded = 0;
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === 1) render(); // Render as soon as the first one is ready
        };
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 1,
            trigger: `#page5`, // Changed to #page5 to match your pinning trigger
            start: `top top`,
            end: `300% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    function render() {
        const currentImg = images[imageSeq.frame];
        // Only draw if the image exists and is fully loaded (width > 0)
        if (currentImg && currentImg.complete && currentImg.width > 0) {
            scaleImage(currentImg, context);
        }
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
    }

    ScrollTrigger.create({
        trigger: "#page5",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `300% top`,
    });
}
canvas1();
// Reset the variable or use a local scope
var clutter6 = ""; // Using a unique name to avoid conflicts

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter6 += `<span>${dets}</span>`;
});

// Update the innerHTML AFTER the loop finishes
document.querySelector("#page6>h1").innerHTML = clutter6;

gsap.to("#page6>h1>span", {
    scrollTrigger: {
        trigger: `#page6>h1`, // Triggering the H1 is usually more stable than triggering spans
        start: `top bottom`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: 0.5,
    },
    stagger: 0.2,
    color: `#fff`
});

function canvas2() {
    const canvas = document.querySelector("#page7>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    const frameCount = 136;
    const images = [];
    const imageSeq = { frame: 0 };

    // Generate URLs and Preload
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        // This generates the URL: 1.webp, 2.webp, etc.
        img.src = `https://thisismagma.com/assets/home/lore/seq/${i}.webp?2`;
        images.push(img);
    }

    images[0].onload = render; // Render first frame when ready

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 1,
            trigger: `#page7`,
            start: `top top`,
            end: `300% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
    }

    ScrollTrigger.create({
        trigger: "#page7",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `300% top`,
    });
}
canvas2();



gsap.to(".page7-circle",{
    scrollTrigger :{
        trigger:`.page7-circle`,
        start:`top center`,
        end:`bottom top`,
        
        scroller:`#main`,
        scrub:.5
    },
   
scale:1.4

})
gsap.to(".page7-cir-inner",{
    scrollTrigger :{
        trigger:`.page7-cir-inner`,
        start:`top center`,
        end:`bottom top`,
        
        scroller:`#main`,
        scrub:.5
    },
    backgroundColor: `#0a3bce91`,


})

