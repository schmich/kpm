function enableKpm() {
  var startMs = (new Date()).getTime();

  // Kappa: 77
  // Keepo: 1149
  // Klappa: 315
  // KappaHD: 1883 & 1884
  // KappaRyu: 768
  // KappaSagat: 769

  // KappaTophat: 594
  // KappaHair: 210
  // KappaHair2: 386
  // KappaCat: 982
  // KappaLeaf: 985
  // KappaStache: 1014
  // KappHair: 1251
  // KappaBeard: 1456
  // KappaSunglasses: 1665
  // KappaBaby: 1519
  // KappaHat: 1970
  // KappaBeard2: 1971
  // KappaSaiyan: 2246
  // KappaKing: 2060
  // KappaClaus: 2020
  // KappaHair3: 2021
  // KappaHat2: 2451
  // KappaPotter: 2690
  // KappaHat3: 2695
  // KappaCowboy: 2395
  // KappaGlasses: 2412
  // KappaHat4: 2668
  // KappaDoge: 2685
  // KappaHoodie: 2539
  // KappaRobin: 2887
  // KappaEyes: 2997
  // KappaGun: 2999
  // KappaShake: 2925
  // KappFro: 2754
  // KappaSuit: 3017
  // KappaBeard3: 3048
  // KappaHat5: 2990
  // KappaBeanie: 3050
  // KappaChu: 3085
  // KappaReap: 3092
  // KappaPink: 3078
  // max: 158xx 

  // BibleThump: 185
  // Hhhehehe: 2052
  // PJSalt: 85
  // DansGame: 83
  // Krey: 90
  // FrankerZ: 173
  // FailFish: 313
  // PogChamp: 187
  // ResidentSleeper: 212

  var kappas = [];
  var totalKappa = 0;
  var peakKpm = 0;

  $('body').on('DOMNodeInserted', '.tse-content', function(e) {
    var count = $(e.target).find('.message .emoticon.emo-77, .message .emoticon.emo-1149').length;
    totalKappa += count;

    var timeMs = (new Date()).getTime();
    for (var i = 0; i < count; ++i) {
      kappas.push(timeMs);
    }
  });

  $('.channel-stats .stat.live-count').before('<span class="stat" style="margin-right: 10px"><svg version="1.1" viewBox="0 0 16 16" width="16px" height="16px" x="0px" y="0px"></svg><span class="emoticon emo-77" style="position: relative; top: -5px; margin-right: 3px"></span>\n\t<span id="kpm">&ndash;</span>\n</span>');

  setInterval(function() {
    var nowMs = (new Date()).getTime();
    var deltaMs = nowMs - startMs;
    if (deltaMs < (10 * 1000)) {
      return;
    }

    while ((kappas.length > 0) && ((nowMs - kappas[0]) >= (60 * 1000))) {
      kappas.shift();
    }

    var interval = Math.min(deltaMs, 60 * 1000) / (60 * 1000);
    var kpm = Math.ceil(kappas.length / interval);

    peakKpm = Math.max(kpm, peakKpm);
    $('#kpm').html('<span style="font-size: larger">' + kpm + '</span>/min &middot; ' + peakKpm + '/min peak &middot; ' + totalKappa + ' total');
  }, 2000);
}
