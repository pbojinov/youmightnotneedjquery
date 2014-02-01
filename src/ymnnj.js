 /**
  * -------------------------------------------------------
  * Project: ymnnj
  * Version: 0.1.0
  *
  * Author:  Petar Bojinov
  * Contact: petarbojinov@gmail.com
  *
  * -------------------------------------------------------
  */

 window.ymnnj = (function(window, undefined) {

     'use strict';

     var version = '0.1.0',
         location = window.location,
         document = window.document,
         currentAbsolutePath = location.toString(),
         baseUrl = currentAbsolutePath.substring(0, currentAbsolutePath.lastIndexOf('/')) + '/';

     var ymnnj = {};

     /** AJAX **/

     /**
      * Basic GET request
      *
      * @method get
      * @param options {Object} : options.url {string}, [options.dataType] {string}
      * @param callback {Function}
      *
      * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
      */
     var get = function(options, callback) {
         var defaultOptions = {
             'dataType': 'json'
         };
         var options = options || defaultOptions;
         if (!options.url) {
             throw 'ymnnj.get() invalid parameters: please provide a valid URL'
         }
         var request = new XMLHttpRequest();
         request.open('GET', options.url, true);
         request.send();

         request.onload = function() {
             var resp = this.response;
             var data = (options.dataType == 'json') ? JSON.parse(resp) : resp;
             if (callback) {
                 callback(data);
             }
         }
     };

     /**
      * Basic POST request
      *
      * @method get
      * @param options {Object} : options.url {string}, [options.dataType] {string} default is json
      * @param callback {Function}
      *
      * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
      */
     var post = function(options) {
         var defaultOptions = {
             'dataType': 'json'
         };
         var options = options || defaultOptions;
         if (!options.url) {
             throw 'ymnnj.post() invalid parameters: please provide a valid URL'
         }
         var request = new XMLHttpRequest();
         options.data = (options.dataType == 'json') ? JSON.stringify(data) : data;
         request.open('POST', options.url, true);
         request.send(options.data)
     };

     /** Effects **/

     var fadeIn = function() {
         //TODO
     };

     var hide = function(element) {
         element.style.display = 'none';
     };

     var show = function(element) {
         element.style.display = '';
     };

     /** Element Manipulation **/

     var addClass = function(element) {
         if (element.classList)
             element.classList.add(className)
         else
             element.className += ' ' + className
     };

     var after = function(element, htmlString) {
         element.insertAdjacentHTML('afterend', htmlString);
     };

     var append = function(parent, element) {
         parent.appendChild(el)
     };

     var before = function(element, htmlString) {
         element.insertAdjacentHTML('beforebegin', htmlString)
     };

     var children = function(element) {
         return element.children;
     };

     var clone = function(element) {
         return element.cloneNode();
     };

     var contains = function(element, child) {
         return element.contains(child);
     };

     var containSelector = function(element, selector) {
         return element.querySelector(selector) !== null;
     };

     /**
      * @method each
      * @param selector {string}
      * @example:
      *
      * y.each(selector, function(element, i) {
      *     console.log(element);
      * });
      *
      */
     var each = function(selector, callback) {
         var elements = document.querySelectorAll(selector);
         for (var i = 0; i < elements.length; i++) {
             callback(elements[i], i);
         }
     };

     var empty = function(element) {
         element.innerHTML = '';
     };

     /**
      * @method filter
      * @param selector {string}
      * @param callback {Function{}}
      * @example:
      *
      * y.filter(selector, filterFn)
      */
     var filter = function(selector, filterFn) {
         var elements = document.querySelectorAll(selector);
         var out = [];
         for (var i = elements.length; i--;) {
             if (filterFn(elements[i]));
             out.unshift(elements[i]);
         }
         return out;
     };

     var find = function(element, selector) {
         return element.querySelectorAll(selector);
     };

     var findEl = function(selector) {
         return document.querySelectorAll(selector);
     };

     /* not supporting IE8 */
     var css = function(ruleName) {
         return getComputedStyle(el)[ruleName];
     };

     var attr = function(element, attribute) {
         return element.getAttribute(attribute);
     };

     var html = function(element, stringHTML) {
         if (stringHTML || stringHTML == '') {
             element.innerHTML = stringHTML;
         } else {
             return element.innerHTML;
         }
     };

     var text = function(element) {
         return element.textContent || element.innerText;
     };

     var hasClass = function(element, className) {
         if (element.classList) {
             element.classList.contains(className)
         } else {
             new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className)
         }
     };

     /* didn't implement matching to selector */
     var is = function(element, otherElement) {
         return element === otherElement;
     };

     // nextSibling can include text nodes
     var next = function() {
         if ('nextElementSibling' in element) {
             return element.nextElementSibling;
         } else {
             do {
                 element = element.nextSibling
             } while (element && element.nodeType !== 1)
             return element;
         }
     };

     //offset

     /**
      * Expose public API
      * @type {Function}
      */

     /** ajax **/
     ymnnj.get = get;
     ymnnj.post = post;

     /** effects **/
     ymnnj.hide = hide;
     ymnnj.show = show;

     /** elements **/
     ymnnj.addClass = addClass;
     ymnnj.after = after;
     ymnnj.append = append;
     ymnnj.before = before;
     ymnnj.children = children;
     ymnnj.clone = clone;
     ymnnj.contains = contains;
     ymnnj.containSelector = containSelector;
     ymnnj.each = each;
     ymnnj.empty = empty;
     ymnnj.filter = filter;
     ymnnj.find = find;
     ymnnj.findEl = findEl;
     ymnnj.css = css;
     ymnnj.html = html;
     ymnnj.text = text;
     ymnnj.hasClass = hasClass;
     ymnnj.is = is;
     ymnnj.next = next;

     /**
      * Public properties
      * @type {string}
      */
     ymnnj._version = version;
     ymnnj._baseUrl = baseUrl;

     /**
      * Shorthand way to access ymnnj
      */

     window.ymnnj = y;

     return ymnnj;

 })(window);
