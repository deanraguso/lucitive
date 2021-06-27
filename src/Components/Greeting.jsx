const generateGreeting = (hours) => {
    if (hours < 6) {
        return "Good morning early bird!"
    } else if (hours < 12) {
        return "Good morning."
    } else if (hours < 17) {
        return "Good afternoon."
    } else if (hours < 20) {
        return "Good evening."
    } else {
        return "Good night owl!"
    }
}

const Greeting = () => {

    let date = new Date();

    return (
        <h1 id="title">
            {generateGreeting(date.getHours())}
        </h1>
    )
}

export default Greeting;