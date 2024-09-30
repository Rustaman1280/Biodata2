function hitung() {
    let bilangan1 = parseFloat(document.getElementById("bil1").value);
    let bilangan2 = parseFloat(document.getElementById("bil2").value);
    let operasi = document.getElementById("operation").value;
    let hasil;

    switch (operasi) {
      case "penjumlahan":
        hasil = bilangan1 + bilangan2;
        break;
      case "pengurangan":
        hasil = bilangan1 - bilangan2;
        break;
      case "perkalian":
        hasil = bilangan1 * bilangan2;
        break;
      case "pembagian":
        hasil = bilangan1 / bilangan2;
        break;
        break;
            case "eksponen":
              hasil = bilangan1 ** bilangan2;  
              operator = " ** ";
            break;
            case "modulus":
              hasil = bilangan1 % bilangan2;  
              operator = " % ";
            

  
    }

    document.getElementById("hasil").innerHTML = hasil;
    
  }