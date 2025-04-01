//About switches. You could do this with else if statements but that would be quite complex

const day = 'sunday';
console.log(day);


switch (day){
    case 'monday':
      console.log('Plan course structure');
      console.log ('Go to coding meetup');
      break;
    case 'tuesday':
      console.log('prepare theory videos');
      break;
    case 'wednesday':
    case 'thursday':
      console.log('write code samples');
      break;
    case 'friday':
      console.log('record viseos');
      break;
    case 'saturday':
    case 'sunday':
      console.log('Enjoy the weekend :-D');
      break;
    default:
      console.log('Not a valid day!');

}

// The same use case with else if vs switch
//const day = (prompt(`Pick a day:`));
//console.log(day);
//console.log(typeof day);

if (day === 'monday') {
    console.log('Plan course structure')
    console.log ('Go to coding meetup')
} else if (day === 'tuesday') {
    console.log('prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code samples')
} else if (day === 'friday') {
    console.log('record vieos')
}  else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :-D')
} else
  console.log('Not a valid day!');
