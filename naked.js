
//great tutorial code https://davidwalsh.name/add-rules-stylesheets
var sheet = (function() {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
	return style.sheet;
})();

//a bit ugly but I like the experience of only installing a single javascript file 
sheet.insertRule(":root {--naked-padding: 16px;--naked-font-size: 12px;}");
sheet.insertRule(".naked {padding: var(--naked-padding);position: relative;border: solid;border-width: 1px;box-sizing: border-box;}");
sheet.insertRule(".naked-border::before {content: var(--h-text);position: absolute;top: 0%;left: 0%;transform: rotate(-90deg) translateX(calc(var(--h) / -2 - 50%));transform-origin: 0% 50%;font-size: var(--naked-font-size);background-color: white;white-space: pre;font-family: 'Courier New', Courier, monospace;font-weight: 100;}");
sheet.insertRule(".naked-border::after {content: var(--w-text);position: absolute;top: 0%;left: 0%;transform: translateY(-.5em) translateX(calc(var(--w) / 2 - 25%));transform-origin: 50% 0%;font-size: var(--naked-font-size);background-color: white;white-space: pre;font-family: 'Courier New', Courier, monospace;font-weight: 100}");

var updateCSSVariables = () => {
    var nakedElements = document.getElementsByClassName("naked")
    Array.from(nakedElements).forEach((el) => {
        var rawStyle = window.getComputedStyle(el);
        el.style.setProperty('--h-text', '" ' + rawStyle.height + ' "')
        el.style.setProperty('--w-text', '" ' + rawStyle.width + ' "')
        el.style.setProperty('--h', '' + rawStyle.height + '')
        el.style.setProperty('--w', '' + rawStyle.width + '')
        el.classList.add('naked-border')
    });
}
updateCSSVariables()
window.addEventListener('resize', updateCSSVariables)


