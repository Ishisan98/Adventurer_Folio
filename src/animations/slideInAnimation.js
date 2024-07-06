export const slideInAnimation = (duration, startPoint, endPoint) => ({
    hidden: {
        x: startPoint,
        opacity: 0
    },
    visible: {
        x: endPoint,
        opacity: 1,
        transition: {
            duration,
            ease: 'easeInOut'
        }
    }
});