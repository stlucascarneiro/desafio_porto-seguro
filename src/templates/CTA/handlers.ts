export function handleContainerSize(): number {
    const viewportWidth = window.innerWidth
    if (viewportWidth > 1134) {
        return 600
    } else if (viewportWidth <= 1134 && viewportWidth > 1062) {
        return 780
    } else if (viewportWidth <= 1062 && viewportWidth > 768) {
        return 1000
    } else if (viewportWidth <= 768 && viewportWidth > 630) {
        return 760
    } else if (viewportWidth <= 630) {
        return 1000
    } else {
        return 600
    }
}