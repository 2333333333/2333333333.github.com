/* 代码整理：懒人之家 www.lanrenzhijia.com */
$(document).ready(function(){
                  
                  
                  var playlist = [{
                                  title:"你还要我怎样",
                                  artist:"薛之谦",
                                  mp3:"http://wl.baidu190.com/1465813205/20160611cf26624aad8df0eea92c572cd71f26.mp3",
                                  //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
                                  poster: "images/0.jpg"
                                  },{
                                  title:"Cro Magnon Man",
                                  artist:"The Stark Palace",
                                  mp3:"http://demo.lanrenzhijia.com/2014/music0917/images/i2.mp3",
                                  //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
                                  poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
                                  },{
                                  title:"Bubble",
                                  m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
                                  oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
                                  poster: "http://31.media.tumblr.com/810b1125a8b9e9f192d009ef58dceb07/tumblr_nbe8wsmKuz1rknpqyo1_500.jpg"
                                  }];
                  
                  var cssSelector = {
                  jPlayer: "#jquery_jplayer",
                  cssSelectorAncestor: ".music-player"
                  };
                  
                  var options = {
                  swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
                  supplied: "ogv, m4v, oga, mp3"
                  };
                  
                  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
                  
                  });