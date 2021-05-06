!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.neosensory=t():e.neosensory=t()}(this,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.r(t),e.d(t,{Buzz:()=>a});var a=function(){function e(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};i(this,e),this.startAudio=function(){t.sendCommand("audio start\n")},this.stopAudio=function(){t.sendCommand("audio stop\n")},this.clearMotorQueue=function(){t.sendCommand("motors clear_queue\n")},this.enableMotors=function(){t.sendCommand("motors start\n")},this.disableMotors=function(){t.sendCommand("motors stop\n")},this.vibrateMotors=function(e){var o=btoa(String.fromCharCode.apply(String,n(new Uint8Array(e.flat()))));t.sendCommand("motors vibrate ".concat(o,"\n"))},this.setThreshold=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";"default"==e&&(e=0),"always"==e&&(e=1),"threshold"==e&&(e=2),t.sendCommand("motors config_threshold ".concat(e," ").concat(n,"\n"))},this.getThreshold=function(){t.sendCommand("motors get_threshold\n")},this.setLRA=function(e){"open"==e&&(e=0),"closed"==e&&(e=1),t.sendCommand("motors config_lra_mode ".concat(e,"\n"))},this.getLRA=function(){t.sendCommand("motors get_lra_mode ".concat(mode,"\n"))},this.getLEDs=function(){t.sendCommand("leds get\n")},this.setLEDs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=function(e,t,n){return"0x"+((1<<24)+(e<<16)+(t<<8)+n).toString(16).slice(1)};e=e.map((function(e){return i.apply(void 0,n(e))})),t.sendCommand("leds set ".concat(e.join(" ")," ").concat(o.map((function(e){return 50*e})).join(" "),"\n"))},this.setButton=function(e,n){1!=e&&"true"!=e||(e=1),0!=e&&"false"!=e||(e=0),1!=n&&"true"!=n||(n=1),0!=n&&"false"!=n||(n=0),t.sendCommand("set_buttons_response ".concat(e," ").concat(n,"\n"))},this.interface=null,this.readBuffer=[],this.lastCommand=[],this.interface=new s;var c=this.interface.onConnectedCallback;this.interface.onConnectedCallback=function(){c(),r()};var u=this.interface.onDisconnectedCallback;this.interface.onDisconnectedCallback=function(){u(),a()},this.interface.onNotificationCallback=function(e){o(t.parseResponse(t.interface.decoder.decode(e.target.value)))}}var t,o;return t=e,(o=[{key:"sendCommand",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.interface.sendMessage(e)}},{key:"requestAuthorization",value:function(){this.sendCommand("auth as developer\n")}},{key:"acceptTerms",value:function(){this.sendCommand("accept\n")}},{key:"pauseDeviceAlgorithm",value:function(){this.stopAudio(),this.startMotors()}},{key:"resumeDeviceAlgorithm",value:function(){this.startAudio()}},{key:"battery",value:function(){this.sendCommand("device battery_soc\n")}},{key:"info",value:function(){this.sendCommand("device info\n")}},{key:"connect",value:function(){this.interface.connect()}},{key:"parseResponse",value:function(e){var t=!1;if(-1!=e.indexOf("{")&&0==this.readBuffer.length?-1!=e.lastIndexOf("}")?(this.lastCommand=e.slice(0,e.indexOf("{")),this.readBuffer.push(e.substring(e.indexOf("{"),e.lastIndexOf("}")+1)),t=!0):this.readBuffer.push(e.substring(e.indexOf("{"))):-1!=e.lastIndexOf("}")?(this.readBuffer.push(e.substring(0,e.lastIndexOf("}")+1)),t=!0):0!=this.readBuffer.length&&this.readBuffer.push(e),t){var n=this.readBuffer.join("");return this.readBuffer=[],(e=JSON.parse(n)).command=this.lastCommand,this.readBuffer=[],e}}},{key:"disconnect",value:function(){this.interface.disconnect(),delete this.audio,delete this.motors,delete this.leds}}])&&r(t.prototype,o),e}(),s=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"6e400001-b5a3-f393-e0a9-e50e24dcca9e",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"6e400002-b5a3-f393-e0a9-e50e24dcca9e",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"6e400003-b5a3-f393-e0a9-e50e24dcca9e";i(this,e),c.call(this),this.serviceUUID=t,this.rxUUID=n,this.txUUID=o,this.encoder=new TextEncoder("utf-8"),this.decoder=new TextDecoder("utf-8"),this.device=null,this.server=null,this.service=null,this.rxchar=null,this.txchar=null,this.android=navigator.userAgent.toLowerCase().indexOf("android")>-1,this.n},c=function(){var e=this;this.connect=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.serviceUUID,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.rxUUID,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.txUUID;function i(e){return function(t){return new Promise((function(n){return setTimeout((function(){return n(t)}),e)}))}}navigator.bluetooth.requestDevice({filters:[{services:[t]},{namePrefix:"Buzz"}],optionalServices:[t]}).then((function(t){return e.device=t,t.gatt.connect()})).then(i(100)).then((function(e){return e.getPrimaryService(t)})).then(i(100)).then((function(t){return e.service=t,t.getCharacteristic(n).then(i(100)).then((function(t){return e.rxchar=t,!0})),t.getCharacteristic(o)})).then(i(1100)).then((function(t){return e.txchar=t,e.txchar.startNotifications().then((function(){e.txchar.addEventListener("characteristicvaluechanged",e.onNotificationCallback)}))})).then(i(100)).then(e.onConnectedCallback()).catch((function(t){console.error(t),e.onErrorCallback(t)}))},this.onNotificationCallback=function(e){},this.onConnectedCallback=function(){},this.sendMessage=function(t){"\n"!=t[t.length-2]&&(t+="\n");var n=e.encoder.encode(t);e.rxchar.writeValue(n)},this.disconnect=function(){var t;null===(t=e.server)||void 0===t||t.disconnect(),e.onDisconnectedCallback()},this.onDisconnectedCallback=function(){}};return t})()}));