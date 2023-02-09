$(function () {

    $('img.svg').each((i, e) => {
        const $img = $(e);
        const imgID = $img.attr('id');
        const imgClass = $img.attr('class');
        const imgURL = $img.attr('src');
        const imgAttr = $img.attr('preserveAspectRatio');
        $.get(imgURL, (data) => {
            let $svg = $(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', `${imgClass}replaced-svg`);
            }
            if (typeof imgAttr !== 'undefined') {
                $svg = $svg.attr('preserveAspectRatio', 'none');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
            }
            $img.replaceWith($svg);
        }, 'xml');
    });

    


    $(this).on('click', '*[data-click]', function (e) {
        let func = $(this).data('click');
        switch (func) {
            case 'navbar-toggle':
                console.log($('.sidebar .sidebar-left'));
                $('.sidebar .sidebar-left').toggleClass('active');
                break;
            default:
                break;
        }
    })

});

