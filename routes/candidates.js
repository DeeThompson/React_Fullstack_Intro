const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) => {

const data = {
    candidates:[
        {name:'joe biden', state:'de'},


    ]
}

res.send('Election 2020')

res.render('candidates')


})

module.exports = router