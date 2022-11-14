function Tooltip() {
    const toolTips = document.querySelectorAll(".toolTip");
    const toolTipElem = document.querySelector(".tooltipElement");
    // console.log(toolTips);
    // console.log(toolTipElem);
    if (!toolTips) return;
  let show = function(el) {
    let title = this.getAttribute('data-tooltip');
    if (title === 0) return;
    toolTipElem.innerHTML = title;
    toolTipElem.style.visibility = 'visible';
    toolTipElem.style.left = (el.x - 25) + 'px';
    toolTipElem.style.top = (el.y + 10) + 'px';
  }

  let returnTool = function(el) {
    toolTipElem.style.visibility = 'hidden';
    
  }

  toolTips.forEach(function(el) {
    el.addEventListener('mouseover', show);
    el.addEventListener('mouseleave', returnTool);
});
	return (
		window.addEventListener('load', function() {
            Tooltip();}
	));
}

export default Tooltip;