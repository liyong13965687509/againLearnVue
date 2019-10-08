module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/goods', function (req, res) {
                    res.json({
                        code: 0,
                        list: [
                            {
                                id: '1',
                                text: '全栈架构师21324',
                                price: '1020'
                            },
                            {
                                id: '2',
                                text: 'Python全栈架构师',
                                price: '1000'
                            },
                        ]
                    })
                })
            }
        }
    }
}
