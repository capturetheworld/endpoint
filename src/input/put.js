const inputdata =
{
    title: 'Putting a new post',
    url : 'https://jsonplaceholder.typicode.com/posts/1',
    method: 'PUT',
    body: [
            {
                name: 'id',
                type: 'number',
                max: 24,
                min: 3,
                required: true,
            },
            {
                name: 'title',
                type: 'text',
                max: 24,
                min: 3,
                required: true,
            },
            {
                name: 'body',
                type: 'text',
                max: 500,
                min: 3,
            },
            {
                name: 'userId',
                type: 'number',
                max: 24,
                min: 3,
                required: true,
            },
        ]
}

export {inputdata};
