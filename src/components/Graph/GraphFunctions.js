export function getFormattedTime(epoch) {
  var myDate = new Date(epoch * 1000);
  var date = myDate.toString().split(" ");
  var year = date[3];
  var time = date[4];
  
  const formattedDate = `${myDate.getDate()}-${date[1]}-${year} ${time}`;
  return formattedDate;
}
