const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
const port = 3033

const botToken = 'xoxb-3763256423-783219774453-AfNaAU7ngQS7Ef6LKXJiF459'

app.use(bodyParser.json())

app.post('/xeppy/', (req, res) => {
  console.log('a', req.body)
  switch (req.body.type){
	  case 'url_verification':
		  res.json({ challenge: req.body.challenge })
	break
    case 'event_callback':
      if (req.body.event.type === 'message' && req.body.event.subtype === undefined) {
        correct(req.body.token, req.body.event.channel, req.body.event.text)
	console.log(req.body)
      }
      res.json({})
      break
    default:
      res.json({})
      break
    res.status(200)
  }
})

function correct (token, channelId, message) {
	const oldMessage = message
	message = message.replace(/issue(?!s)/g, 'oopsie whoopsie')
	message = message.replace(/issues/gi, 'couple o\' oopsie whoopsies')
	message = message.replace(/blocker(?!s)/gi, 'hurdle')
	message = message.replace(/blockers/gi, 'hurdles')
	message = message.replace(/bitch(?!ing)/gi, 'team member')
	message = message.replace(/bitching/gi, 'voicing alternative points-of-view')
	message = message.replace(/bug(?!s)/gi, 'hiccup')
	message = message.replace(/bugs/gi, 'hiccups')
	message = message.replace(/fuck(?!ing)/gi, 'bobba')
	message = message.replace(/fucking/gi, 'bobba')
	message = message.replace('frustration', 'growing opportunity')
	message = message.replace('frustrated', 'growing opportunity')
	message = message.replace('frustrating', 'opportunity')
	message = message.replace('death', 'new start')
	message = message.replace(/dead(?!line)/gi, 'new start')
	message = message.replace('dying', 'starting fresh')
	message = message.replace('deadline', 'goal')
	message = message.replace('ussr', 'united socialist soy republic')
	message = message.replace('scope creep', 'surprise features')
	message = message.replace('tech debt', 'improvement opportunity')
	message = message.replace('technical debt', 'improvement opportunity')
	message = message.replace('sred', 'SRED (Super Ready to Experiment, Dude)')
	message = message.replace(/rant(?!ing)/gi, 'share')
	message = message.replace(/thanks/gi, ':thanks:')
	message = message.replace(/thank you/gi, ':thanks:')
	message = message.replace(/:thank_you:/gi, ':thanks:')
	message = message.replace(/ruslan/gi, ':thanks:\'s biggest fan')
	message = message.replace(/ranting/gi, 'sharing')
	message = message.replace(/stress(?!ed)/gi, 'challenge')
	message = message.replace(/complain(?!t)/gi, 'voice opinion')
	message = message.replace(/complaint/gi, 'opinion')
	message = message.replace(/twat/gi, 'pleasant person')
	message = message.replace(/shit/gi, 'poopoo')
	message = message.replace(/nice/gi, '69')
	message = message.replace(/69/gi, 'nice')
	message = message.replace(/Got it\!/gi, 'yeah ok bud whatever')
	message = message.replace(/pedestrian/gi, 'basic')
	message = message.replace(/hack/gi, 'creative unauthorized access')
	message = message.replace(/starbucks/gi, 'the office coffee machine that makes perfectly fine coffee')
	message = message.replace(/bye/gi, 'away for a teeny tiny while')
	message = message.replace(/vacation/gi, 'working outside toronto')
	message = message.replace(/stressed/gi, 'challenged')
	message = message.replace(/wanker/gi, 'gentle caresser')
	message = message.replace(/bitch/gi, 'best friend')
	message = message.replace(/rip(?!t)/gi, 'ripperino')
	message = message.replace(/pingpong/gi, 'table tennis')
	message = message.replace(/ping pong/gi, 'table tennis')
	message = message.replace(/ping-pong/gi, 'table-tennis')
	message = message.replace(/xello england/gi, 'xuk')
	message = message.replace(/Big Dog/gi, 'Damian')	
	message = message.replace(/xion/gi, 'xuk')
	message = message.replace(/\/lightbox-sentence-check/gi, '/lame-bot')
	message = message.replace(/\:xeppy\:/gi, ':xeppy-wild:')
	message = message.replace(/xeppelin bot/gi, 'xeppy')
	message = message.replace(/the bot/gi, 'xeppy')
	message = message.replace(/giuseppe/gi, 'xeppy')
	message = message.replace(/kill/gi, 'shake hands with')
	message = message.replace(/petersons/gi, 'bad data inc.')
	message = message.replace(/thanks xeppy/gi, 'thanks, the best bot in the world')
	const config = {
		headers: { 'Authorization': "Bearer " + botToken }
	};
	if (message !== oldMessage) axios.post('https://slack.com/api/chat.postMessage', { text: `${message}*`, channel: channelId }, config).then(console.log).catch(console.log)
	setTimeout(() => console.log(channelId, token), 1000); 
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
