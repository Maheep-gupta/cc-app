const communities = [
    { name: 'Ui/Ux Community' },
    { name: 'Web Developer' },
    { name: 'Dribble Community' },
    { name: 'Behance' },
];

const data = communities.map(community => ({
    name: community.name,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(community.name)}&bold=true&background=random&uppercase=false`,
    url:'/'
}));

export default data;