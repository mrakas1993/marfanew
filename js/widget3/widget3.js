/*
*
 Instruction:

 Place that code close to </body> tag at the end of page
 and then place onClick="showSonlineWidget(sonlineWidgetOptions);" anywhere you need

 <script>
 var sonlineWidgetOptions = {
 groupid: 55, // if you know groupid
 placeid: 1,  // or placeid (groupid is higher than placeid)
 cityid: 1,  // cityid (optional)
 masterid: 1,  // masterid (optional)
 bgcolor: '183249', // (optional)
 activecolor: 'f2720c', // (optional)
 link: '3c3f42', // (optional)
 linkactive: 'fff',  // (optional)
 linkdone: '9fa1a2', // (optional)
 lang: 'ru', // (ru/en/de ... optional)
 // windowedMode: true // fullscreen by default, but this setting center small widget window if you prefer
 roistatid: 'xxxxx', // (optional) roistat.com integration, visit id
 roistatkey: 'xxxxxxxxxxxxxx', // (optional) roistat.com integration, key id (like 3694cf4de0a72e1e75d8b0e478e11d62)
 tracking: 'one,two',
 calltouchId: xxxx // (optional, calltouch integration)
 }
 </script>
 <div id="widgetSonline"/>
 <script type="text/javascript" src="https://sonline.su/js/widget3/widget3.js"></script>
* */
function FrameListener(){
  var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
  eventer(messageEvent,function(e) {
    if(e.data==='closeSonlineWidget') {
      document.getElementById('widgetSonline').innerHTML='';
    }
  },false);};

function showSonlineWidget(options) {
    document.getElementById('widgetSonline').innerHTML = '<iframe src="https://widget.sonline.su/'+(options.lang?options.lang:'ru')+'/'+
      (options.groupid?'map/?groupid='+options.groupid:'services/?placeid='+options.placeid)+
      (options.cityid?'&cityid='+options.cityid:'')+
      (options.masterid?'&master='+options.masterid:'')+
      (options.bgcolor?'&bgcolor='+options.bgcolor:'')+
      (options.activecolor?'&activecolor='+options.activecolor:'')+
      (options.link?'&link='+options.link:'')+
      (options.linkactive?'&linkactive='+options.linkactive:'')+
      (options.linkdone?'&linkdone='+options.linkdone:'')+
      (options.roistatid?'&roistatid='+options.roistatid:'')+
      (options.roistatkey?'&roistatkey='+options.roistatkey:'')+
      (options.tracking?'&tracking='+options.tracking:'')+
      (options.calltouchId?'&calltouchId='+options.calltouchId:'')+
      '" scrolling="no" marginheight="0" marginwidth="0" frameborder="0"></iframe></div><style>#widgetSonline{z-index: 999999999; position:relative;}</style><style>div#widgetSonline iframe {' + (options.windowedMode ? 'position: fixed;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);height:660px;width:810px;box-shadow: 60px 60px 60px rgba(0, 0, 0, .5);' : 'position: fixed;top: 100%;left: 100%;-webkit-transform: translate(-100%, -100%);transform: translate(-100%, -100%);height:100%;width:100%;') + '};</style>';
  FrameListener();
}
