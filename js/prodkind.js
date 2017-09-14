var mix_prodkinds = {
  methods: {
    layout_AIO() {
      var link = [];

      link.push(this.layout_001(true, true));
      link.push(this.layout_002C());
      link.push(this.layout_006());
      link.push(this.layout_007());
      link.push(this.layout_007B());
      link.push(this.layout_008A());

      return link.reverse();
    },
    layout_HFS() {
      var link = [];

      link.push(this.layout_001());

      if (this.greetings.includes('HOLIDAY')) {
        link.push(this.layout_001HOLIDAY(true));
        link.push(this.layout_001AHOLIDAY());
        link.push(this.layout_001BHOLIDAY());
        link.push(this.layout_001CHOLIDAY());
        link.push(this.layout_001DHOLIDAY());
        link.push(this.layout_001IHOLIDAY());
        link.push(this.layout_001JHOLIDAY());
        link.push(this.layout_001MHOLIDAY());
        link.push(this.layout_001NHOLIDAY());
        link.push(this.layout_001OHOLIDAY());
        link.push(this.layout_007BHOLIDAY());
      }

      if (this.greetings.includes('CHRISTMAS')) {
        link.push(this.layout_001CHRISTMAS(true));
        link.push(this.layout_001ACHRISTMAS());
        link.push(this.layout_001BCHRISTMAS());
        link.push(this.layout_001CCHRISTMAS());
        link.push(this.layout_001DCHRISTMAS());
        link.push(this.layout_001ICHRISTMAS());
        link.push(this.layout_001JCHRISTMAS());
        link.push(this.layout_001MCHRISTMAS());
        link.push(this.layout_001NCHRISTMAS());
        link.push(this.layout_001OCHRISTMAS());
        link.push(this.layout_007BCHRISTMAS());
      }

      if (this.greetings.includes('NEWYEAR')) {
        link.push(this.layout_001NEWYEAR(true));
        link.push(this.layout_001ANEWYEAR());
        link.push(this.layout_001BNEWYEAR());
        link.push(this.layout_001CNEWYEAR());
        link.push(this.layout_001DNEWYEAR());
        link.push(this.layout_001INEWYEAR());
        link.push(this.layout_001JNEWYEAR());
        link.push(this.layout_001MNEWYEAR());
        link.push(this.layout_001NNEWYEAR());
        link.push(this.layout_001ONEWYEAR());
        link.push(this.layout_007BNEWYEAR());
      }

      if (this.greetings.includes('RELIGIOUS')) {
        link.push(this.layout_001RELIGIOUS(true));
        link.push(this.layout_001ARELIGIOUS());
        link.push(this.layout_001BRELIGIOUS());
        link.push(this.layout_001CRELIGIOUS());
        link.push(this.layout_001DRELIGIOUS());
        link.push(this.layout_001IRELIGIOUS());
        link.push(this.layout_001JRELIGIOUS());
        link.push(this.layout_001MRELIGIOUS());
        link.push(this.layout_001NRELIGIOUS());
        link.push(this.layout_001ORELIGIOUS());
        link.push(this.layout_007BRELIGIOUS());
      }

      link.push(this.layout_002C());
      link.push(this.layout_002D());
      link.push(this.layout_003());
      link.push(this.layout_004());
      link.push(this.layout_006());
      link.push(this.layout_007());
      link.push(this.layout_007B());
      link.push(this.layout_008());
      link.push(this.layout_008A());
      link.push(this.layout_009());

      return link.reverse();
    },
    layout_HSM() {
      var link = [];

      link.push(this.layout_001());
      link.push(this.layout_002C());
      link.push(this.layout_004());
      link.push(this.layout_007());
      link.push(this.layout_007B());
      link.push(this.layout_008());

      return link.reverse();
    },
    layout_HYC() {
      var link = [];

      link.push(this.layout_001());

      if (this.greetings.includes('HOLIDAY')) {
        link.push(this.layout_001HOLIDAY());
        link.push(this.layout_001AHOLIDAY());
        link.push(this.layout_001BHOLIDAY());
        link.push(this.layout_001CHOLIDAY());
        link.push(this.layout_001DHOLIDAY());
        link.push(this.layout_001IHOLIDAY());
        link.push(this.layout_001JHOLIDAY());
        link.push(this.layout_001MHOLIDAY());
        link.push(this.layout_001NHOLIDAY());
        link.push(this.layout_001OHOLIDAY());
        link.push(this.layout_007BHOLIDAY());
      }

      if (this.greetings.includes('CHRISTMAS')) {
        link.push(this.layout_001CHRISTMAS());
        link.push(this.layout_001ACHRISTMAS());
        link.push(this.layout_001BCHRISTMAS());
        link.push(this.layout_001CCHRISTMAS());
        link.push(this.layout_001DCHRISTMAS());
        link.push(this.layout_001ICHRISTMAS());
        link.push(this.layout_001JCHRISTMAS());
        link.push(this.layout_001MCHRISTMAS());
        link.push(this.layout_001NCHRISTMAS());
        link.push(this.layout_001OCHRISTMAS());
        link.push(this.layout_007BCHRISTMAS());
      }

      if (this.greetings.includes('NEWYEAR')) {
        link.push(this.layout_001NEWYEAR());
        link.push(this.layout_001ANEWYEAR());
        link.push(this.layout_001BNEWYEAR());
        link.push(this.layout_001CNEWYEAR());
        link.push(this.layout_001DNEWYEAR());
        link.push(this.layout_001INEWYEAR());
        link.push(this.layout_001JNEWYEAR());
        link.push(this.layout_001MNEWYEAR());
        link.push(this.layout_001NNEWYEAR());
        link.push(this.layout_001ONEWYEAR());
        link.push(this.layout_007BNEWYEAR());
      }

      if (this.greetings.includes('RELIGIOUS')) {
        link.push(this.layout_001RELIGIOUS());
        link.push(this.layout_001ARELIGIOUS());
        link.push(this.layout_001BRELIGIOUS());
        link.push(this.layout_001CRELIGIOUS());
        link.push(this.layout_001DRELIGIOUS());
        link.push(this.layout_001IRELIGIOUS());
        link.push(this.layout_001JRELIGIOUS());
        link.push(this.layout_001MRELIGIOUS());
        link.push(this.layout_001NRELIGIOUS());
        link.push(this.layout_001ORELIGIOUS());
        link.push(this.layout_007BRELIGIOUS());
      }

      link.push(this.layout_002C());
      link.push(this.layout_002D());
      link.push(this.layout_003());
      link.push(this.layout_004());
      link.push(this.layout_006());
      link.push(this.layout_007());
      link.push(this.layout_007B());
      link.push(this.layout_008());
      link.push(this.layout_008A());
      link.push(this.layout_009());

      return link.reverse();
    },
  }
}
