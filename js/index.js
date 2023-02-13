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


    $(this).on('click', '[data-bs-toggle="collapse"]', function (e) {
        console.log($(this).children('[data-change="rotate"]').children('img'));
        $(this).children('[data-change="rotate"]').toggleClass('rotate-img');
    });


    $(this).on('click', '*[data-click]', function (e) {
        let func = $(this).data('click');
        switch (func) {
            case 'navbar-toggle':
                let data_label = $(this).data('label');

                if (data_label == 'nav-left') {
                    let mail_img = $(this).children('img');
                    
                    if (mail_img.attr('data-label') == 'active') {
                        let img_src = '/imgs/MenuUnfold.svg';
                        mail_img.attr('data-label', '');
                        mail_img.attr('src', img_src);
        
                        // $('.nav-left .nav-bizfly [data-toggle="tooltip"]').tooltip('enable');
                    } else {
                        let img_src = '/imgs/MenuFold.svg';
                        mail_img.attr('src', img_src);
                        mail_img.attr('data-label', 'active');
        
                        // $('.nav-left .nav-bizfly [data-toggle="tooltip"]').tooltip('disable');
                    }

                    $('.sidebar .sidebar-left').toggleClass('active');
        
                    // $('#content .overview').toggleClass('active-nav-biz');

                } else if (data_label == 'nav-right') {

                    let mail_img = $(this).children('img');
                    
                    if (mail_img.attr('data-label') == 'active') {
                        let img_src = 'imgs/side-arrow-right.svg';
                        mail_img.attr('data-label', '');
                        mail_img.attr('src', img_src);

                    } else {
                        let img_src = 'imgs/side-arrow-left.svg';
                        mail_img.attr('src', img_src);
                        mail_img.attr('data-label', 'active');
        
                    }

                    $('.sidebar .sidebar-right').toggleClass('active');

                }

                break;
            default:
                break;
        }
    })

});

