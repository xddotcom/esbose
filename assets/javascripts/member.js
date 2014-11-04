(function() {
    
    $('.view').css('min-height', $(window).height());
    $('#view-member-bg').css({
        height: $(window).height(),
        width: $(window).width()
    });
    
    function onBridgeReady() {
        WeixinJSBridge.call('hideOptionMenu');
    }
    
    if (typeof WeixinJSBridge == "undefined") {
        $(document).on('WeixinJSBridgeReady', onBridgeReady);
    } else {
        onBridgeReady();
    }
    
    new (Amour.View.extend({
        events: {
            'hide.bs.collapse .panel-collapse': 'hidePanel',
            'show.bs.collapse .panel-collapse': 'showPanel'
        },
        hidePanel: function(e) {
            var $target = $(e.currentTarget);
            $target.siblings('.panel-heading').find('.icon').removeClass('in');
        },
        showPanel: function(e) {
            var $target = $(e.currentTarget);
            $target.siblings('.panel-heading').find('.icon').addClass('in');
        }
    }))({
        el: $('#member-credits-accordion')
    });
    
})();
