import moment from 'moment-timezone'

console.log(moment().tz(moment.tz.guess()).format('ha z'))
