let tl = gsap.timeline();

tl.to("#one", {
    width: "100%",  // First image opens
    ease: "expo.inOut",
    duration: 2
})
    .from("#text h1:nth-child(1)", {  // First text appears
        top: "-100%",
        ease: "expo.inOut",
        duration: 2,
        // delay: 2
    }, "-=1") // Starts 1 sec before image animation ends
    .to("#one", {
        width: "0%",  // First image closes
        ease: "expo.inOut",
        duration: 2
    })
    .to("#two", {
        width: "100%",  // Second image opens
        ease: "expo.inOut",
        duration: 2
    })
    .from("#text h1:nth-child(2)", {  // Second text appears
        top: "-100%",
        ease: "expo.inOut",
        duration: 2,
        // delay: 2
    }, "-=1")
    .to("#two", {
        width: "0%",  // Second image closes
        ease: "expo.inOut",
        duration: 2
    })
    .to("#three", {
        width: "100%",  // Third image opens
        ease: "expo.inOut",
        duration: 2
    })
    .from("#text h1:nth-child(3)", {  // Third text appears
        top: "-100%",
        ease: "expo.inOut",
        duration: 2,
        // delay: 2
    }, "-=1");
