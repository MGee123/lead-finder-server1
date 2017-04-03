const express = require('express')
  , router = express.Router();

  global.leads = 
  [
     {
       id:1,
       url: 'https://www.reddit.com/r/forhire/search?q=%5Bhiring%5D+react&restrict_sr=on&sort=new&t=all',
       body: 'blah',
       time: 12345678910,
     }
  ];

router.get('/', function(req, res){
	return res.json({
		leads: global.leads,
		error: false
	});
});

module.exports = router;
