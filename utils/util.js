function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function parseServerData(serviceData){
  var code = serviceData && (serviceData.statusCode == 200) && serviceData.data &&serviceData.data.code;
  if(code=200){
    return serviceData.data.content;
  }
  else{
    console.log(serviceData);
    throw new Exception("requestErrorMsg:"+serviceData.errMsg+";dataMsg:"+serviceData.data.msg);
  }
}

function sayHello(name){
  console.log("hello,"+name);
}

module.exports = {
  formatTime: formatTime,
  sayHello:sayHello,
  parseServerData:parseServerData
}
