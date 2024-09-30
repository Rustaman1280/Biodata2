function hitung() {
    let bilangan1 = parseFloat(document.getElementById("bil1").value);
    let operasi = document.getElementById("operation").value;
    let hasil;

    switch (operasi) {
     
            case "increment":
              hasil = bilangan1 + 1;
              
            break;
            case "decrement":
              hasil = bilangan1 - 1;
              
              
    }

    document.getElementById("hasil").innerHTML = hasil;
    
  }