var component = `
  <center>
    <h2>Halo BackboneJS!</h2>
    <p>Ini adalah contoh website yang menggunakan cdn backbone.js :)</p>
    <button id="pindah">Klik</button>
  </center>
`;

$(document).ready(function() {
  (function() {
    var View = Backbone.View.extend({
      'el' : $("#output"),
      'template' : _.template(component),
      'initialize' : function() {
        this.muat();
      },
      'muat' : function() {
        this.$el.html(this.template())
      }
    });
    
    new View();
  })();
  
  $("#pindah").on("click", () => {
    alert("Selamat tinggal!");
    window.location.href = "https://website-pertama-saya.infinityfreeapp.com/";
  });
});
