function b() {
    var i = document.f.estado.selectedIndex;



    if (i == 0) {
        alert("Selecione o tipo de combustivel")
    }

    if (i == 1) {

        var ga = document.getElementById('gasolina').value
        var r = document.getElementById('rendimento').value
        var m = document.getElementById('media').value
        var g = document.getElementById('gas').value
        a = parseFloat(ga);
        b = parseFloat(r);
        c = parseFloat(m);
        d = parseFloat(g);

        e = ((b * 23) / 100) + b;
        f = ((c * a) / b);
        h = ((c * d) / b);

        var intf = f.toFixed(2)
        var inth = h.toFixed(2)
        var x = (intf * 30);
        var z = (inth * 30);
        var intz = z.toFixed(2)
        var intx = x.toFixed(2)
        var t = ((Math.round(c) * 30) * 23) / 100 + (c * 30);

        var mediaredonda = (intx - intz);
        var mediakm = mediaredonda.toFixed(2)

        var kmedia = (t - (c * 30));
        var kmedia = kmedia.toFixed(2)



        $('#algumacoisa').html("<h4>" + "Sua autonomia com 1L é:--------------------" + " " + "<b>" + b + "Km" + "</b>" + "   |" + "GNV:----------" + "<b>" + " " + e + "km" + "</b>" + "<br/>" +
            "Seu gasto por litro é:---------------------------  " + " " + "<b>" + "R$" + a + "</b>" + "   " + " | " + "GNV:----------" + "<b> " + "R$" + d + "</b>" + "<br/>" +
            "Com" + " " + c + "   " + "km rodados você gasta:------------" + " " + "<b>" + "R$" + " " + intf + "</b>" + " | " + "GNV:----------" + "<b>" + "R$" + " " + inth + "</b>" + "<br>"
            + "Média de" + " " + (c * 30) + " " + "Km Rodados ao mês:------- " + " " + "<b>" + "R$" + intx + " " + "</b> " + " " + " | " + + t + "km" + " " + "ao mes com" + " " + "GNV:----------" + "<b>" + intz + "</b>" + "<br>" +
            " Com GNV  você economiza em média  " + " " + "<b style='color:red;'>" + mediakm + " " + "</b>" + "R$" + " " + "Ao mes e roda " + "<b style='color:red;'>" + kmedia + " " + "Km" + "</b>" + " a mais" +"</h4>")

       

    }
    if (i == 2) {



        var ga = document.getElementById('gasolina').value
        var r = document.getElementById('rendimento').value
        var m = document.getElementById('media').value
        var g = document.getElementById('gas').value
        a = parseFloat(ga);
        b = parseFloat(r);
        c = parseFloat(m);
        d = parseFloat(g);

        e = ((b * 66) / 100) + b;
        f = ((c * a) / b);
        h = ((c * d) / b);


        var intf = f.toFixed(2)
        var inth = h.toFixed(2)
        var x = (intf * 30);
        var z = (inth * 30);
        var intz = z.toFixed(2)
        var intx = x.toFixed(2)
        var t = ((Math.round(c) * 30) * 66) / 100 + (c * 30);

        var mediaredonda = (intx - intz);
        var mediakm = mediaredonda.toFixed(2)

        var kmedia = (t - (c * 30));
        var kmedia = kmedia.toFixed(2)



        $('#algumacoisa').html("<h3>" + "Sua autonomia com 1L é:--------------------" + " " + "<b>" + b + "Km" + "</b>" + "   |" + "GNV:----------" + "<b>" + " " + e + "km" + "</b>" + "<br/>" +
            "Seu gasto por litro é:---------------------------  " + " " + "<b>" + "R$" + a + "</b>" + "   " + " | " + "GNV:----------" + "<b> " + "R$" + d + "</b>" + "<br/>" +
            "Com" + " " + c + "   " + "km rodados você gasta:------------" + " " + "<b>" + "R$" + " " + intf + "</b>" + " | " + "GNV:----------" + "<b>" + "R$" + " " + inth + "</b>" + "<br>"
            + "Média de" + " " + (c * 30) + " " + "Km Rodados ao mês:------- " + " " + "<b>" + "R$" + intx + " " + "</b> " + " " + " | " + + t + "km" + " " + "ao mes com" + " " + "GNV:----------" + "<b>" + intz + "</b>" + "<br>" +
            " Com GNV  você economiza em média  " + " " + "<b style='color:red;'>" + mediakm + " " + "</b>" + "R$" + " " + "Ao mes e roda " + "<b style='color:red;'>" + kmedia + " " + "Km" + "</b>" + " a mais")


    }





}