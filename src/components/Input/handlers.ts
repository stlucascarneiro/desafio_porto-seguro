export function handlePhoneMask(e: string) {
    if (e.length === 1 && e[0] !== '(') {
        return '(' + e
    } else if (e.length === 4 && e[3] !== ')') {
        return [e.slice(0, 3), ') ', e.slice(3)].join('')
    } else if (e.length === 11 && e[10] !== '-') {
        return [e.slice(0, 10), '-', e.slice(10)].join('')
    } else if (e.length > 15) {
        return e.slice(0, -1)
    } else {
        return e
    }
}