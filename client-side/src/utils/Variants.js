export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? -40 : direction === 'down' ? 40 : 0,
            x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
            opacity: 0,
            transition: { delay },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: { 
            type:'tween',
            duration: 1.2,
            delay : delay,
            ease: [0.25 , 0.25 , 0.25 , 0.75]
             },
        },
    };
};

export const rotate = (angle, duration, delay) => {
    return {
        hidden: {
            rotate: angle,
        },
        show: {
            rotate: 0,
            transition: {
                type: 'tween',
                duration: duration,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

