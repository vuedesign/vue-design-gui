import Mock from 'mockjs';

Mock.mock(/\/api\/v1\/operate\/activity/, 'get', options => {
    console.log('mock: /api/v1/operate/activity');
    return {
        type: options.type,
        code: 200,
        data: Mock.mock({
            'data|10': [
                {
                    'id|+1': 1,
                    name: '@NAME',
                    birthday: '@DATETIME',
                    email: '@email()',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            pagination: {
                page: 1,
                limit: 2,
                pages: 1,
                total: 10,
                next: null,
                prev: null
            }
        })
    };
});
