export const getDayHoursAndSetGreeting = () => {

    const currentHour: number = new Date().getHours();
    
    if (currentHour < 12) {
        return "Good Morning";
    } else if (currentHour < 15) {
        return "Good Afternoon";
    } else if (currentHour < 18) {
        return "Good Evening";
    } else {
        return "Good Night";
    }
}