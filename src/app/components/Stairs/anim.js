export const expand = {
    initial: {
        height: "100vh",
        top: 0
    },
    enter: (i) => ({    
        height: "0vh",
        transition: {
            duration: 0.7,
            delay: 0.08 * i,
            ease: [0.76, 0, 0.24, 1],
        }
    }),
    exit: (i) => ({
        height: "100vh",
        transition: {
            duration: 0.7,
            delay: 0.08 * (7 - i), // Reverse order for exit
            ease: [0.76, 0, 0.24, 1]
        }
    })
}

export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0,
        transition: {
            duration: 0.4,
            delay: 1.2 // Wait for stairs to mostly complete
        }
    },
    exit: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeInOut"
        }
    }
}