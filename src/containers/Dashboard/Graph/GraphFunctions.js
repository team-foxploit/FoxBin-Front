export function getFormattedTime(epoch) {
  var myDate = new Date(epoch * 1000);
  var date = myDate.toString().split(" ");
  var year = myDate.toString().split(" ")[3].substring(2, 4);
  const formattedDate = `${myDate.getDate()}-${date[1]}-${year}`;
  return formattedDate;
}
