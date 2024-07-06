export const dropInAnimation = (duration, startPoint, endPoint) => ({
    hidden: {
        y: startPoint,
        opacity: 0
    },
    visible: {
        y: endPoint,
        opacity: 1,
        transition: {
            duration,
            ease: 'easeInOut'
        }
    }
});