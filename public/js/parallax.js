function parallax(event) {
	this.querySelectorAll('.layer-2').forEach(layer => {
		let speed = layer.getAttribute('rotate');
		layer.style.transform = `translateX(${event.clientX*speed/80}px) translateY(${event.clientY*speed/50}px)`
	});
}

document.addEventListener('mousemove', parallax);