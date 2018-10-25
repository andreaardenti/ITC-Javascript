    var romanNumber = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1},roman = '',i;
    for ( i in romanNumber ) {
      while ( value >= romanNumber[i] ) {
        roman += i;
        value -= romanNumber[i];
      }
    }
    return roman;
  }

  console.log(romanize(1972));
