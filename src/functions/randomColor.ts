
const colors = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',]

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

export default randomColor;