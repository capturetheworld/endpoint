const inputdata =
{
    title: 'Create new user',
    url : 'https://jsonplaceholder.typicode.com/users',
    method: 'POST',
    body: [
            {
                name: 'email',
                type: 'email',
                max: 24,
                min: 3,
            },
            {
                name: 'full-name',
                type: 'text',
                placeholder: 'John Doe',
                required: true,
            },
            {
                name: 'phone',
                type: 'tel',
            },
        ]
}

export {inputdata};
