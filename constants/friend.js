const friends = [
    { name: 'Maheep Gupta' },
    { name: 'Mohit Gop' },
    { name: 'Izuku Midoriya' },
    { name: 'Light Yagami' },
    { name: 'Kamado Tanjiro' },
    { name: 'Tomaruo' },
    { name: 'Rishabh Sharma' },
    { name: 'Parth Srivastava' },
    { name: 'Parth Srivastava' },
    { name: 'Parth Srivastava' },
    { name: 'Parth Srivastava' },
    { name: 'Parth Srivastava' },
];

const friendData = friends.map(friend => ({
    name: friend.name,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&bold=true&background=random&uppercase=false`,
}));
export default friendData