var simplemde = new SimpleMDE({
	autofocus: true,
	element: document.getElementById("simple")
});
if(!simplemde.isFullscreenActive()) simplemde.toggleFullScreen();
