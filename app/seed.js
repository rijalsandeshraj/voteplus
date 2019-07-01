window.Seed = (function () {
    const submissions = [
        {
            id: 1,
            title: 'Python',
            description: 'Language of the present and the future.',
            url: '#',
            votes: 16,
            avatar: '../public/images/avatars/boy.png',
            submissionImage: '../public/images/submissions/python.jpeg',
        },
        {
            id: 2,
            title: 'Super Life: The Fantasy Turned True',
            description: 'What if you could turn your dreams into reality instantly?',
            url: '#',
            votes: 11,
            avatar: '../public/images/avatars/girl1.png',
            submissionImage: '../public/images/submissions/sample.jpeg',
        },
        {
            id: 3,
            title: 'Uncle Jack',
            description: 'There\'s a lot to learn from Uncle Jack.',
            url: '#',
            votes: 17,
            avatar: '../public/images/avatars/man.png',
            submissionImage: '../public/images/submissions/abstract.jpeg',
        },
        {
            id: 4,
            title: 'JavaScript',
            description: 'Language of the web. Not learning it is not an excuse.',
            url: '#',
            votes: 9,
            avatar: '../public/images/avatars/girl2.png',
            submissionImage: '../public/images/submissions/javascript.png',
        }
    ];

    return { submissions: submissions };
}());