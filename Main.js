setTimeout(function(){
    (function(ext) {
        ext._shutdown = function() {};
        ext._getStatus = function() {
            return {status: 2, msg: 'Swag'};
        };
        ext.run_code= function() {


        };
                ext.run_code2= function() {
                    var Scratch
                    var sprite
                    var xPosition
                    document.onkeydown = function(e) {	if(e.keyCode==87) {Scratch.sprite.xPosition += 10}}

        };
        var descriptor = {
            blocks: [
                [' ', '1', 'run_code'],
                [' ', '2', 'run_code2'],
            ]

        };


        unsafeWindow.ScratchExtensions.register('Custom Blocks', descriptor, ext);
    })({});
}, 5000);
