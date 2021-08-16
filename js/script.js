// ========================================
    // Smoth Scroll & NavBar Background Change
    // ========================================
    $(function (){
        $(document).scroll(function () {
          var $nav = $(".fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > 300);
        });
      });
  
      // ========================================
      // NavLink Background Change
      // ========================================
      $(".nav-link").click(function(){
        $(".nav-link").css("background","");
        $(this).css("background","#000");
      })