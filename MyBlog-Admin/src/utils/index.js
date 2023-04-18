class Utils {
  formatTime() {
    const timeStamp = new Date();
    const year = timeStamp.getFullYear();
    const month = timeStamp.getMonth() + 1;
    const data = timeStamp.getDate();
    let hours = timeStamp.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    let minute = timeStamp.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;
    let second = timeStamp.getSeconds();
    second = second < 10 ? '0' + second : second;
    // console.log(year, month, data, hours, minute, second);
    return year + '-' + month + '-' + data + ' ' + hours + ':' + minute + ':' + second
  }
}


module.exports = new Utils();