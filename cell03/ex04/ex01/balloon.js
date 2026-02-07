const colors = ['red', 'green', 'blue'];
let colorIdx = 0;

function increaseSize() {
    const $balloon = $("#balloon");
    let currentSize = $balloon.width();
    let nextSize = currentSize + 10;

    if (nextSize > 420) {
        nextSize = 200;
        colorIdx = 0;
    } else {
        colorIdx = (colorIdx + 1) % colors.length;
    }

    $balloon.css({
        'width': nextSize + 'px',
        'height': nextSize + 'px',
        'background-color': colors[colorIdx]
    });
}

function decreaseSize() {
    const $balloon = $("#balloon");
    let currentSize = $balloon.width();
    
    if (currentSize > 200) {
        let nextSize = currentSize - 5;
        colorIdx = (colorIdx - 1 + colors.length) % colors.length; 
        
        $balloon.css({
            'width': nextSize + 'px',
            'height': nextSize + 'px',
            'background-color': colors[colorIdx]
        });
    }
}

$(function() {
    $('#balloon').on({
        'click': increaseSize,
        'mouseleave': decreaseSize
    });
});