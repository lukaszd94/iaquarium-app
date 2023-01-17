(function(){"use strict";var e={913:function(){try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}!function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();!function(){var e={};n.r(e),n.d(e,{KL:function(){return Vi},Kk:function(){return zi}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},i=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const a=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&a)}else if(r>239&&r<365){const a=e[n++],s=e[n++],o=e[n++],c=((7&r)<<18|(63&a)<<12|(63&s)<<6|63&o)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const a=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&a)<<6|63&s)}}return t.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],a=r+1<e.length,s=a?e[r+1]:0,o=r+2<e.length,c=o?e[r+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;o||(d=64,a||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],a=r<e.length,s=a?n[e.charAt(r)]:0;++r;const o=r<e.length,c=o?n[e.charAt(r)]:64;++r;const l=r<e.length,u=l?n[e.charAt(r)]:64;if(++r,null==t||null==s||null==c||null==u)throw Error();const h=t<<2|s>>4;if(i.push(h),64!==c){const e=s<<4&240|c>>2;if(i.push(e),64!==u){const e=c<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){const n=t(e);return r.encodeByteArray(n,!0)},s=function(e){return a(e).replace(/\./g,"")},o=function(e){try{return r.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){return"object"===typeof indexedDB}function l(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_HOST_URL:"",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&o(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=w,Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?v(r,n):"Error",s=`${this.serviceName}: ${a} (${i}).`,o=new y(i,s,n);return o}}function v(e,t){return e.replace(_,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const _=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],a=t[r];if(I(n)&&I(a)){if(!C(n,a))return!1}else if(n!==a)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function I(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S(e){return e&&e._delegate?e._delegate:e}class E{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new m;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(O(e))try{this.getOrInitializeService({instanceIdentifier:k})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=k){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=k){return this.instances.has(e)}getOptions(e=k){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,a]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:D(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=k){return this.component?this.component.multipleInstances?e:k:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function D(e){return e===k?void 0:e}function O(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new T(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R=[];var L;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(L||(L={}));const N={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},P=L.INFO,M={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},j=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=M[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class B{constructor(e){this.name=e,this._logLevel=P,this._logHandler=j,this._userLogHandler=null,R.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?N[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const U=(e,t)=>t.some((t=>e instanceof t));let x,K;function q(){return x||(x=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H(){return K||(K=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $=new WeakMap,F=new WeakMap,W=new WeakMap,V=new WeakMap,z=new WeakMap;function G(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{t(ee(e.result)),i()},a=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&$.set(t,e)})).catch((()=>{})),z.set(t,e),t}function J(e){if(F.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{t(),i()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)}));F.set(e,t)}let Y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return F.get(e);if("objectStoreNames"===t)return e.objectStoreNames||W.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ee(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Q(e){Y=e(Y)}function X(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?H().includes(e)?function(...t){return e.apply(te(this),t),ee($.get(this))}:function(...t){return ee(e.apply(te(this),t))}:function(t,...n){const i=e.call(te(this),t,...n);return W.set(i,t.sort?t.sort():[t]),ee(i)}}function Z(e){return"function"===typeof e?X(e):(e instanceof IDBTransaction&&J(e),U(e,q())?new Proxy(e,Y):e)}function ee(e){if(e instanceof IDBRequest)return G(e);if(V.has(e))return V.get(e);const t=Z(e);return t!==e&&(V.set(e,t),z.set(t,e)),t}const te=e=>z.get(e);function ne(e,t,{blocked:n,upgrade:i,blocking:r,terminated:a}={}){const s=indexedDB.open(e,t),o=ee(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(ee(s.result),e.oldVersion,e.newVersion,ee(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),o.then((e=>{a&&e.addEventListener("close",(()=>a())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}function ie(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),ee(n).then((()=>{}))}const re=["get","getKey","getAll","getAllKeys","count"],ae=["put","add","delete","clear"],se=new Map;function oe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(se.get(t))return se.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=ae.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!re.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,r?"readwrite":"readonly");let s=a.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&a.done]))[0]};return se.set(t,a),a}Q((e=>({...e,get:(t,n,i)=>oe(t,n)||e.get(t,n,i),has:(t,n)=>!!oe(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(le(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function le(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const ue="@firebase/app",he="0.8.4",de=new B("@firebase/app"),fe="@firebase/app-compat",pe="@firebase/analytics-compat",ge="@firebase/analytics",me="@firebase/app-check-compat",we="@firebase/app-check",ye="@firebase/auth",be="@firebase/auth-compat",ve="@firebase/database",_e="@firebase/database-compat",Ce="@firebase/functions",Ie="@firebase/functions-compat",Se="@firebase/installations",Ee="@firebase/installations-compat",ke="@firebase/messaging",Te="@firebase/messaging-compat",De="@firebase/performance",Oe="@firebase/performance-compat",Ae="@firebase/remote-config",Re="@firebase/remote-config-compat",Le="@firebase/storage",Ne="@firebase/storage-compat",Pe="@firebase/firestore",Me="@firebase/firestore-compat",je="firebase",Be="[DEFAULT]",Ue={[ue]:"fire-core",[fe]:"fire-core-compat",[ge]:"fire-analytics",[pe]:"fire-analytics-compat",[we]:"fire-app-check",[me]:"fire-app-check-compat",[ye]:"fire-auth",[be]:"fire-auth-compat",[ve]:"fire-rtdb",[_e]:"fire-rtdb-compat",[Ce]:"fire-fn",[Ie]:"fire-fn-compat",[Se]:"fire-iid",[Ee]:"fire-iid-compat",[ke]:"fire-fcm",[Te]:"fire-fcm-compat",[De]:"fire-perf",[Oe]:"fire-perf-compat",[Ae]:"fire-rc",[Re]:"fire-rc-compat",[Le]:"fire-gcs",[Ne]:"fire-gcs-compat",[Pe]:"fire-fst",[Me]:"fire-fst-compat","fire-js":"fire-js",[je]:"fire-js-all"},xe=new Map,Ke=new Map;function qe(e,t){try{e.container.addComponent(t)}catch(n){de.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function He(e){const t=e.name;if(Ke.has(t))return de.debug(`There were multiple attempts to register component ${t}.`),!1;Ke.set(t,e);for(const n of xe.values())qe(n,e);return!0}function $e(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fe={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},We=new b("app","Firebase",Fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new E("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:Be,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!==typeof r||!r)throw We.create("bad-app-name",{appName:String(r)});if(n||(n=g()),!n)throw We.create("no-options");const a=xe.get(r);if(a){if(C(n,a.options)&&C(i,a.config))return a;throw We.create("duplicate-app",{appName:r})}const s=new A(r);for(const c of Ke.values())s.addComponent(c);const o=new Ve(n,i,s);return xe.set(r,o),o}function Ge(e=Be){const t=xe.get(e);if(!t&&e===Be)return ze();if(!t)throw We.create("no-app",{appName:e});return t}function Je(e,t,n){var i;let r=null!==(i=Ue[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const a=r.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${r}" with version "${t}":`];return a&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void de.warn(e.join(" "))}He(new E(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ye="firebase-heartbeat-database",Qe=1,Xe="firebase-heartbeat-store";let Ze=null;function et(){return Ze||(Ze=ne(Ye,Qe,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Xe)}}}).catch((e=>{throw We.create("idb-open",{originalErrorMessage:e.message})}))),Ze}async function tt(e){var t;try{const t=await et();return t.transaction(Xe).objectStore(Xe).get(it(e))}catch(n){if(n instanceof y)de.warn(n.message);else{const e=We.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});de.warn(e.message)}}}async function nt(e,t){var n;try{const n=await et(),i=n.transaction(Xe,"readwrite"),r=i.objectStore(Xe);return await r.put(t,it(e)),i.done}catch(i){if(i instanceof y)de.warn(i.message);else{const e=We.create("idb-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message});de.warn(e.message)}}}function it(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=1024,at=2592e6;class st{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ot();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=at})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ot(),{heartbeatsToSend:t,unsentEntries:n}=ct(this._heartbeatsCache.heartbeats),i=s(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ot(){const e=new Date;return e.toISOString().substring(0,10)}function ct(e,t=rt){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ut(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ut(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class lt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!c()&&l().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await tt(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ut(e){return s(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){He(new E("platform-logger",(e=>new ce(e)),"PRIVATE")),He(new E("heartbeat",(e=>new st(e)),"PRIVATE")),Je(ue,he,e),Je(ue,he,"esm2017"),Je("fire-js","")}ht("");var dt="firebase",ft="9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Je(dt,ft,"app");const pt="@firebase/installations",gt="0.5.16",mt=1e4,wt=`w:${gt}`,yt="FIS_v2",bt="https://firebaseinstallations.googleapis.com/v1",vt=36e5,_t="installations",Ct="Installations",It={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},St=new b(_t,Ct,It);function Et(e){return e instanceof y&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt({projectId:e}){return`${bt}/projects/${e}/installations`}function Tt(e){return{token:e.token,requestStatus:2,expiresIn:Lt(e.expiresIn),creationTime:Date.now()}}async function Dt(e,t){const n=await t.json(),i=n.error;return St.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ot({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function At(e,{refreshToken:t}){const n=Ot(e);return n.append("Authorization",Nt(t)),n}async function Rt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Lt(e){return Number(e.replace("s","000"))}function Nt(e){return`${yt} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=kt(e),r=Ot(e),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={fid:n,authVersion:yt,appId:e.appId,sdkVersion:wt},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await Rt((()=>fetch(i,o)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Tt(e.authToken)};return t}throw await Dt("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=/^[cdef][\w-]{21}$/,Ut="";function xt(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=Kt(e);return Bt.test(n)?n:Ut}catch(e){return Ut}}function Kt(e){const t=jt(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Map;function $t(e,t){const n=qt(e);Ft(n,t),Wt(n,t)}function Ft(e,t){const n=Ht.get(e);if(n)for(const i of n)i(t)}function Wt(e,t){const n=zt();n&&n.postMessage({key:e,fid:t}),Gt()}let Vt=null;function zt(){return!Vt&&"BroadcastChannel"in self&&(Vt=new BroadcastChannel("[Firebase] FID Change"),Vt.onmessage=e=>{Ft(e.data.key,e.data.fid)}),Vt}function Gt(){0===Ht.size&&Vt&&(Vt.close(),Vt=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="firebase-installations-database",Yt=1,Qt="firebase-installations-store";let Xt=null;function Zt(){return Xt||(Xt=ne(Jt,Yt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qt)}}})),Xt}async function en(e,t){const n=qt(e),i=await Zt(),r=i.transaction(Qt,"readwrite"),a=r.objectStore(Qt),s=await a.get(n);return await a.put(t,n),await r.done,s&&s.fid===t.fid||$t(e,t.fid),t}async function tn(e){const t=qt(e),n=await Zt(),i=n.transaction(Qt,"readwrite");await i.objectStore(Qt).delete(t),await i.done}async function nn(e,t){const n=qt(e),i=await Zt(),r=i.transaction(Qt,"readwrite"),a=r.objectStore(Qt),s=await a.get(n),o=t(s);return void 0===o?await a.delete(n):await a.put(o,n),await r.done,!o||s&&s.fid===o.fid||$t(e,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e){let t;const n=await nn(e.appConfig,(n=>{const i=an(n),r=sn(e,i);return t=r.registrationPromise,r.installationEntry}));return n.fid===Ut?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function an(e){const t=e||{fid:xt(),registrationStatus:0};return un(t)}function sn(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(St.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=on(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:cn(e)}:{installationEntry:t}}async function on(e,t){try{const n=await Pt(e,t);return en(e.appConfig,n)}catch(n){throw Et(n)&&409===n.customData.serverCode?await tn(e.appConfig):await en(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function cn(e){let t=await ln(e.appConfig);while(1===t.registrationStatus)await Mt(100),t=await ln(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await rn(e);return n||t}return t}function ln(e){return nn(e,(e=>{if(!e)throw St.create("installation-not-found");return un(e)}))}function un(e){return hn(e)?{fid:e.fid,registrationStatus:0}:e}function hn(e){return 1===e.registrationStatus&&e.registrationTime+mt<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn({appConfig:e,heartbeatServiceProvider:t},n){const i=fn(e,n),r=At(e,n),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={installation:{sdkVersion:wt,appId:e.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await Rt((()=>fetch(i,o)));if(c.ok){const e=await c.json(),t=Tt(e);return t}throw await Dt("Generate Auth Token",c)}function fn(e,{fid:t}){return`${kt(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e,t=!1){let n;const i=await nn(e.appConfig,(i=>{if(!yn(i))throw St.create("not-registered");const r=i.authToken;if(!t&&bn(r))return i;if(1===r.requestStatus)return n=gn(e,t),i;{if(!navigator.onLine)throw St.create("app-offline");const t=_n(i);return n=wn(e,t),t}})),r=n?await n:i.authToken;return r}async function gn(e,t){let n=await mn(e.appConfig);while(1===n.authToken.requestStatus)await Mt(100),n=await mn(e.appConfig);const i=n.authToken;return 0===i.requestStatus?pn(e,t):i}function mn(e){return nn(e,(e=>{if(!yn(e))throw St.create("not-registered");const t=e.authToken;return Cn(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function wn(e,t){try{const n=await dn(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await en(e.appConfig,i),n}catch(n){if(!Et(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await en(e.appConfig,n)}else await tn(e.appConfig);throw n}}function yn(e){return void 0!==e&&2===e.registrationStatus}function bn(e){return 2===e.requestStatus&&!vn(e)}function vn(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+vt}function _n(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Cn(e){return 1===e.requestStatus&&e.requestTime+mt<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e){const t=e,{installationEntry:n,registrationPromise:i}=await rn(t);return i?i.catch(console.error):pn(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(e,t=!1){const n=e;await En(n);const i=await pn(n,t);return i.token}async function En(e){const{registrationPromise:t}=await rn(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn(e){if(!e||!e.options)throw Tn("App Configuration");if(!e.name)throw Tn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Tn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Tn(e){return St.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="installations",On="installations-internal",An=e=>{const t=e.getProvider("app").getImmediate(),n=kn(t),i=$e(t,"heartbeat"),r={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return r},Rn=e=>{const t=e.getProvider("app").getImmediate(),n=$e(t,Dn).getImmediate(),i={getId:()=>In(n),getToken:e=>Sn(n,e)};return i};function Ln(){He(new E(Dn,An,"PUBLIC")),He(new E(On,Rn,"PRIVATE"))}Ln(),Je(pt,gt),Je(pt,gt,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Pn="https://fcmregistrations.googleapis.com/v1",Mn="FCM_MSG",jn="google.c.a.c_id",Bn=3,Un=1;var xn,Kn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qn(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Hn(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let a=0;a<i.length;++a)r[a]=i.charCodeAt(a);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(xn||(xn={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(Kn||(Kn={}));const $n="fcm_token_details_db",Fn=5,Wn="fcm_token_object_Store";async function Vn(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map((e=>e.name));if(!t.includes($n))return null}let t=null;const n=await ne($n,Fn,{upgrade:async(n,i,r,a)=>{var s;if(i<2)return;if(!n.objectStoreNames.contains(Wn))return;const o=a.objectStore(Wn),c=await o.index("fcmSenderId").get(e);if(await o.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(s=e.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:qn(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:qn(e.auth),p256dh:qn(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:qn(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:qn(e.auth),p256dh:qn(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:qn(e.vapidKey)}}}}});return n.close(),await ie($n),await ie("fcm_vapid_details_db"),await ie("undefined"),zn(t)?t:null}function zn(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="firebase-messaging-database",Jn=1,Yn="firebase-messaging-store";let Qn=null;function Xn(){return Qn||(Qn=ne(Gn,Jn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Yn)}}})),Qn}async function Zn(e){const t=ni(e),n=await Xn(),i=await n.transaction(Yn).objectStore(Yn).get(t);if(i)return i;{const t=await Vn(e.appConfig.senderId);if(t)return await ei(e,t),t}}async function ei(e,t){const n=ni(e),i=await Xn(),r=i.transaction(Yn,"readwrite");return await r.objectStore(Yn).put(t,n),await r.done,t}async function ti(e){const t=ni(e),n=await Xn(),i=n.transaction(Yn,"readwrite");await i.objectStore(Yn).delete(t),await i.done}function ni({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ri=new b("messaging","Messaging",ii);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ai(e,t){var n;const i=await li(e),r=ui(t),a={method:"POST",headers:i,body:JSON.stringify(r)};let s;try{const t=await fetch(ci(e.appConfig),a);s=await t.json()}catch(o){throw ri.create("token-subscribe-failed",{errorInfo:null===(n=o)||void 0===n?void 0:n.toString()})}if(s.error){const e=s.error.message;throw ri.create("token-subscribe-failed",{errorInfo:e})}if(!s.token)throw ri.create("token-subscribe-no-token");return s.token}async function si(e,t){var n;const i=await li(e),r=ui(t.subscriptionOptions),a={method:"PATCH",headers:i,body:JSON.stringify(r)};let s;try{const n=await fetch(`${ci(e.appConfig)}/${t.token}`,a);s=await n.json()}catch(o){throw ri.create("token-update-failed",{errorInfo:null===(n=o)||void 0===n?void 0:n.toString()})}if(s.error){const e=s.error.message;throw ri.create("token-update-failed",{errorInfo:e})}if(!s.token)throw ri.create("token-update-no-token");return s.token}async function oi(e,t){var n;const i=await li(e),r={method:"DELETE",headers:i};try{const n=await fetch(`${ci(e.appConfig)}/${t}`,r),i=await n.json();if(i.error){const e=i.error.message;throw ri.create("token-unsubscribe-failed",{errorInfo:e})}}catch(a){throw ri.create("token-unsubscribe-failed",{errorInfo:null===(n=a)||void 0===n?void 0:n.toString()})}}function ci({projectId:e}){return`${Pn}/projects/${e}/registrations`}async function li({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ui({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:t,p256dh:e}};return i!==Nn&&(r.web.applicationPubKey=i),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=6048e5;async function di(e){const t=await mi(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:qn(t.getKey("auth")),p256dh:qn(t.getKey("p256dh"))},i=await Zn(e.firebaseDependencies);if(i){if(wi(i.subscriptionOptions,n))return Date.now()>=i.createTime+hi?pi(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await oi(e.firebaseDependencies,i.token)}catch(r){console.warn(r)}return gi(e.firebaseDependencies,n)}return gi(e.firebaseDependencies,n)}async function fi(e){const t=await Zn(e.firebaseDependencies);t&&(await oi(e.firebaseDependencies,t.token),await ti(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function pi(e,t){try{const n=await si(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await ei(e.firebaseDependencies,i),n}catch(n){throw await fi(e),n}}async function gi(e,t){const n=await ai(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await ei(e,i),i.token}async function mi(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Hn(t)})}function wi(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&i&&r&&a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return bi(t,e),vi(t,e),_i(t,e),t}function bi(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const r=t.notification.image;r&&(e.notification.image=r);const a=t.notification.icon;a&&(e.notification.icon=a)}function vi(e,t){t.data&&(e.data=t.data)}function _i(e,t){var n,i,r,a,s;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const o=null!==(r=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==r?r:null===(a=t.notification)||void 0===a?void 0:a.click_action;o&&(e.fcmOptions.link=o);const c=null===(s=t.fcmOptions)||void 0===s?void 0:s.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e){return"object"===typeof e&&!!e&&jn in e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(e,t){const n=Ei(t,await e.firebaseDependencies.installations.getId());ki(e,n)}function Ei(e,t){var n,i;const r={};return e.from&&(r.project_number=e.from),e.fcmMessageId&&(r.message_id=e.fcmMessageId),r.instance_id=t,e.notification?r.message_type=xn.DISPLAY_NOTIFICATION.toString():r.message_type=xn.DATA_MESSAGE.toString(),r.sdk_platform=Bn.toString(),r.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(r.collapse_key=e.collapse_key),r.event=Un.toString(),(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)&&(r.analytics_label=null===(i=e.fcmOptions)||void 0===i?void 0:i.analytics_label),r}function ki(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}function Ti(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(e,t){var n,i;const{newSubscription:r}=e;if(!r)return void await fi(t);const a=await Zn(t.firebaseDependencies);await fi(t),t.vapidKey=null!==(i=null===(n=null===a||void 0===a?void 0:a.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==i?i:Nn,await di(t)}async function Oi(e,t){const n=Li(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await Si(t,n);const i=await ji();if(Pi(i))return Mi(i,n);if(n.notification&&await Bi(Ri(n)),t&&t.onBackgroundMessageHandler){const e=yi(n);"function"===typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function Ai(e){var t,n;const i=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[Mn];if(!i)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const r=Ui(i);if(!r)return;const a=new URL(r,self.location.href),s=new URL(self.location.origin);if(a.host!==s.host)return;let o=await Ni(a);return o?o=await o.focus():(o=await self.clients.openWindow(r),await Ii(3e3)),o?(i.messageType=Kn.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,o.postMessage(i)):void 0}function Ri(e){const t=Object.assign({},e.notification);return t.data={[Mn]:e},t}function Li({data:e}){if(!e)return null;try{return e.json()}catch(t){return null}}async function Ni(e){const t=await ji();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}function Pi(e){return e.some((e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")))}function Mi(e,t){t.isFirebaseMessaging=!0,t.messageType=Kn.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function ji(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Bi(e){var t;const{actions:n}=e,{maxActions:i}=Notification;return n&&i&&n.length>i&&console.warn(`This browser only supports ${i} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}function Ui(e){var t,n,i;const r=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(i=e.notification)||void 0===i?void 0:i.click_action;return r||(Ci(e.data)?self.location.origin:null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e){if(!e||!e.options)throw Ki("App Configuration Object");if(!e.name)throw Ki("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Ki(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ki(e){return ri.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ti("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Ti("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class qi{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=xi(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=e=>{const t=new qi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",(e=>{e.waitUntil(Oi(e,t))})),self.addEventListener("pushsubscriptionchange",(e=>{e.waitUntil(Di(e,t))})),self.addEventListener("notificationclick",(e=>{e.waitUntil(Ai(e))})),t};function $i(){He(new E("messaging-sw",Hi,"PUBLIC"))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(){return c()&&await l()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e,t){if(void 0!==self.document)throw ri.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vi(e=Ge()){return Fi().then((e=>{if(!e)throw ri.create("unsupported-browser")}),(e=>{throw ri.create("indexed-db-unsupported")})),$e(S(e),"messaging-sw").getImmediate()}function zi(e,t){return e=S(e),Wi(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$i();n(913);const Gi=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n},Ji=Gi;class Yi extends Error{constructor(e,t){const n=Ji(e,t);super(n),this.name=e,this.details=t}}const Qi={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},Xi=e=>[Qi.prefix,e,Qi.suffix].filter((e=>e&&e.length>0)).join("-"),Zi=e=>{for(const t of Object.keys(Qi))e(t)},er={updateDetails:e=>{Zi((t=>{"string"===typeof e[t]&&(Qi[t]=e[t])}))},getGoogleAnalyticsName:e=>e||Xi(Qi.googleAnalytics),getPrecacheName:e=>e||Xi(Qi.precache),getPrefix:()=>Qi.prefix,getRuntimeName:e=>e||Xi(Qi.runtime),getSuffix:()=>Qi.suffix};function tr(e,t){const n=t();return e.waitUntil(n),n}n(977);const nr="__WB_REVISION__";function ir(e){if(!e)throw new Yi("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new Yi("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set(nr,t),{cacheKey:i.href,url:r.href}}class rr{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class ar{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const n=(null===t||void 0===t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return n?new Request(n,{headers:e.headers}):e},this._precacheController=e}}let sr;function or(){if(void 0===sr){const t=new Response("");if("body"in t)try{new Response(t.body),sr=!0}catch(e){sr=!1}sr=!1}return sr}async function cr(e,t){let n=null;if(e.url){const t=new URL(e.url);n=t.origin}if(n!==self.location.origin)throw new Yi("cross-origin-copy-response",{origin:n});const i=e.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=t?t(r):r,s=or()?i.body:await i.blob();return new Response(s,a)}const lr=e=>{const t=new URL(String(e),location.href);return t.href.replace(new RegExp(`^${location.origin}`),"")};function ur(e,t){const n=new URL(e);for(const i of t)n.searchParams.delete(i);return n.href}async function hr(e,t,n,i){const r=ur(t.url,n);if(t.url===r)return e.match(t,i);const a=Object.assign(Object.assign({},i),{ignoreSearch:!0}),s=await e.keys(t,a);for(const o of s){const t=ur(o.url,n);if(r===t)return e.match(o,i)}}class dr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const fr=new Set;async function pr(){for(const e of fr)await e()}function gr(e){return new Promise((t=>setTimeout(t,e)))}n(873);function mr(e){return"string"===typeof e?new Request(e):e}class wr{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new dr,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=mr(e);if("navigate"===n.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:t})}catch(a){if(a instanceof Error)throw new Yi("plugin-error-request-will-fetch",{thrownErrorMessage:a.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))e=await n({event:t,request:r,response:e});return e}catch(s){throw i&&await this.runCallbacks("fetchDidFail",{error:s,event:t,originalRequest:i.clone(),request:r.clone()}),s}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=mr(e);let n;const{cacheName:i,matchOptions:r}=this._strategy,a=await this.getCacheKey(t,"read"),s=Object.assign(Object.assign({},r),{cacheName:i});n=await caches.match(a,s);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await o({cacheName:i,matchOptions:r,cachedResponse:n,request:a,event:this.event})||void 0;return n}async cachePut(e,t){const n=mr(e);await gr(0);const i=await this.getCacheKey(n,"write");if(!t)throw new Yi("cache-put-with-no-response",{url:lr(i.url)});const r=await this._ensureResponseSafeToCache(t);if(!r)return!1;const{cacheName:a,matchOptions:s}=this._strategy,o=await self.caches.open(a),c=this.hasCallback("cacheDidUpdate"),l=c?await hr(o,i.clone(),["__WB_REVISION__"],s):null;try{await o.put(i,c?r.clone():r)}catch(u){if(u instanceof Error)throw"QuotaExceededError"===u.name&&await pr(),u}for(const h of this.iterateCallbacks("cacheDidUpdate"))await h({cacheName:a,oldResponse:l,newResponse:r.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let i=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))i=mr(await e({mode:t,request:i,event:this.event,params:this.params}));this._cacheKeys[n]=i}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"===typeof t[e]){const n=this._pluginStateMap.get(t),i=i=>{const r=Object.assign(Object.assign({},i),{state:n});return t[e](r)};yield i}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;while(e=this._extendLifetimePromises.shift())await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const i of this.iterateCallbacks("cacheWillUpdate"))if(t=await i({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&200!==t.status&&(t=void 0),t}}class yr{constructor(e={}){this.cacheName=er.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n="string"===typeof e.request?new Request(e.request):e.request,i="params"in e?e.params:void 0,r=new wr(this,{event:t,request:n,params:i}),a=this._getResponse(r,n,t),s=this._awaitComplete(a,r,n,t);return[a,s]}async _getResponse(e,t,n){let i;await e.runCallbacks("handlerWillStart",{event:n,request:t});try{if(i=await this._handle(t,e),!i||"error"===i.type)throw new Yi("no-response",{url:t.url})}catch(r){if(r instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(i=await a({error:r,event:n,request:t}),i)break;if(!i)throw r}for(const a of e.iterateCallbacks("handlerWillRespond"))i=await a({event:n,request:t,response:i});return i}async _awaitComplete(e,t,n,i){let r,a;try{r=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:i,request:n,response:r}),await t.doneWaiting()}catch(s){s instanceof Error&&(a=s)}if(await t.runCallbacks("handlerDidComplete",{event:i,request:n,response:r,error:a}),t.destroy(),a)throw a}}class br extends yr{constructor(e={}){e.cacheName=er.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(br.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const i=t.params||{};if(!this._fallbackToNetwork)throw new Yi("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const r=i.integrity,a=e.integrity,s=!a||a===r;if(n=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?a||r:void 0})),r&&s&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,n.clone());0}}return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e),i=await t.cachePut(e,n.clone());if(!i)throw new Yi("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,i]of this.plugins.entries())i!==br.copyRedirectedCacheableResponsesPlugin&&(i===br.defaultPrecacheCacheabilityPlugin&&(e=n),i.cacheWillUpdate&&t++);0===t?this.plugins.push(br.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}br.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},br.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:e}){return e.redirected?await cr(e):e}};class vr{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new br({cacheName:er.getPrecacheName(e),plugins:[...t,new ar({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){"string"===typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:i}=ir(n),r="string"!==typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==e)throw new Yi("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:e});if("string"!==typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new Yi("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(i,e),this._urlsToCacheModes.set(i,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return tr(e,(async()=>{const t=new rr;this.strategy.plugins.push(t);for(const[r,a]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(a),n=this._urlsToCacheModes.get(r),i=new Request(r,{integrity:t,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:i,event:e}))}const{updatedURLs:n,notUpdatedURLs:i}=t;return{updatedURLs:n,notUpdatedURLs:i}}))}activate(e){return tr(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),i=[];for(const r of t)n.has(r.url)||(await e.delete(r),i.push(r.url));return{deletedURLs:i}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){const e=await self.caches.open(this.strategy.cacheName);return e.match(n)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new Yi("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let _r;const Cr=()=>(_r||(_r=new vr),_r);n(80);const Ir="GET",Sr=e=>e&&"object"===typeof e?e:{handle:e};class Er{constructor(e,t,n=Ir){this.handler=Sr(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=Sr(e)}}class kr extends Er{constructor(e,t,n){const i=({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)};super(i,t,n)}}class Tr{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const n=Promise.all(t.urlsToCache.map((t=>{"string"===typeof t&&(t=[t]);const n=new Request(...t);return this.handleRequest({request:n,event:e})})));e.waitUntil(n),e.ports&&e.ports[0]&&n.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const i=n.origin===location.origin,{params:r,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:i,url:n});let s=a&&a.handler;const o=e.method;if(!s&&this._defaultHandlerMap.has(o)&&(s=this._defaultHandlerMap.get(o)),!s)return void 0;let c;try{c=s.handle({url:n,request:e,event:t,params:r})}catch(u){c=Promise.reject(u)}const l=a&&a.catchHandler;return c instanceof Promise&&(this._catchHandler||l)&&(c=c.catch((async i=>{if(l){0;try{return await l.handle({url:n,request:e,event:t,params:r})}catch(a){a instanceof Error&&(i=a)}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw i}))),c}findMatchingRoute({url:e,sameOrigin:t,request:n,event:i}){const r=this._routes.get(n.method)||[];for(const a of r){let r;const s=a.match({url:e,sameOrigin:t,request:n,event:i});if(s)return r=s,(Array.isArray(r)&&0===r.length||s.constructor===Object&&0===Object.keys(s).length||"boolean"===typeof s)&&(r=void 0),{route:a,params:r}}return{}}setDefaultHandler(e,t=Ir){this._defaultHandlerMap.set(t,Sr(e))}setCatchHandler(e){this._catchHandler=Sr(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new Yi("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new Yi("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let Dr;const Or=()=>(Dr||(Dr=new Tr,Dr.addFetchListener(),Dr.addCacheListener()),Dr);function Ar(e,t,n){let i;if("string"===typeof e){const r=new URL(e,location.href);0;const a=({url:e})=>e.href===r.href;i=new Er(a,t,n)}else if(e instanceof RegExp)i=new kr(e,t,n);else if("function"===typeof e)i=new Er(e,t,n);else{if(!(e instanceof Er))throw new Yi("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});i=e}const r=Or();return r.registerRoute(i),i}function Rr(e,t=[]){for(const n of[...e.searchParams.keys()])t.some((e=>e.test(n)))&&e.searchParams.delete(n);return e}function*Lr(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:i=!0,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const s=Rr(a,t);if(yield s.href,n&&s.pathname.endsWith("/")){const e=new URL(s.href);e.pathname+=n,yield e.href}if(i){const e=new URL(s.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}class Nr extends Er{constructor(e,t){const n=({request:n})=>{const i=e.getURLsToCacheKeys();for(const r of Lr(n.url,t)){const t=i.get(r);if(t){const n=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:n}}}};super(n,e.strategy)}}function Pr(e){const t=Cr(),n=new Nr(t,e);Ar(n)}function Mr(e){const t=Cr();t.precache(e)}function jr(e,t){Mr(e),Pr(t)}jr([{'revision':null,'url':'/css/about.a38393e2.css'},{'revision':null,'url':'/css/app.7a587003.css'},{'revision':null,'url':'/css/chunk-vendors.6bcecfb5.css'},{'revision':'6704f071b90dde643d0e0db703d267f4','url':'/firebase-messaging-sw.js-localhost'},{'revision':'e4eb4727c4163b699f61d3550a387e5c','url':'/firebase-messaging-sw.js-prod'},{'revision':null,'url':'/fonts/fa-brands-400.0e53fe4f.woff'},{'revision':null,'url':'/fonts/fa-brands-400.7edea186.woff2'},{'revision':null,'url':'/fonts/fa-brands-400.9c02eaf6.ttf'},{'revision':null,'url':'/fonts/fa-brands-400.b2970adc.eot'},{'revision':null,'url':'/fonts/fa-regular-400.04dd5282.woff'},{'revision':null,'url':'/fonts/fa-regular-400.7346017c.ttf'},{'revision':null,'url':'/fonts/fa-regular-400.a0140e7c.eot'},{'revision':null,'url':'/fonts/fa-regular-400.e2b3a9dc.woff2'},{'revision':null,'url':'/fonts/fa-solid-900.620019ed.woff2'},{'revision':null,'url':'/fonts/fa-solid-900.974801a4.eot'},{'revision':null,'url':'/fonts/fa-solid-900.d5b0a356.ttf'},{'revision':null,'url':'/fonts/fa-solid-900.e67670b0.woff'},{'revision':null,'url':'/img/aquarium-bg-2.ed1eba26.jpg'},{'revision':null,'url':'/img/fa-brands-400.a76d53bf.svg'},{'revision':null,'url':'/img/fa-regular-400.ee37fbcc.svg'},{'revision':null,'url':'/img/fa-solid-900.cd7322bf.svg'},{'revision':'c3d7b16aea9068682f50f21294e081fe','url':'/index.html'},{'revision':null,'url':'/js/about.783497c0.js'},{'revision':null,'url':'/js/app.1300c7f6.js'},{'revision':'5d2b8b14e76027ca6be4c25f249724c5','url':'/manifest.json'},{'revision':'735ab4f94fbcd57074377afca324c813','url':'/robots.txt'}]);const Br=ze({apiKey:"AIzaSyA9g3qOYvcfyZ1UU-HDvDl-96HIli3rucE",authDomain:"iaquarium-v2-aaae7.firebaseapp.com",projectId:"iaquarium-v2-aaae7",storageBucket:"iaquarium-v2-aaae7.appspot.com",messagingSenderId:"1093225067884",appId:"1:1093225067884:web:b1a5640779cfb95eadef49",measurementId:"G-ERVX777CB5"}),Ur=Vi(Br);zi(Ur,(e=>{console.log("[firebase-messaging-sw.js] Received background message ",e);var t=e.notification,n=t.title,i={body:t.body,image:t.image,data:{url:"https://iaquarium.ml"}};return self.registration.showNotification(n,i)})),(0,e.onMessage)(Ur,(e=>{console.log("[firebase-messaging-sw.js] Received foreground message ",e);var t=e.notification,n=t.title,i={body:t.body,image:t.image,data:{url:"https://iaquarium.ml"}};return self.registration.showNotification(n,i)}))}()})();
//# sourceMappingURL=firebase-messaging-sw.js.map