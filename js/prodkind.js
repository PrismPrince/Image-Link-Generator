var mix_prodkinds = {
  methods: {
    layout_AIO() {
      var link = [];
      var obj;

      this.layouts = [];
      this.formats = ['PD.gif', 'PZ.gif', 'CP.jpg', 'PD.jpg', 'PZ.jpg', 'TH.jpg'];

      for (obj of this.layout_001(true, true)) {
        link.push(obj);
      }

      for (obj of this.layout_002C()) {
        link.push(obj);
      }

      for (obj of this.layout_006()) {
        link.push(obj);
      }

      for (obj of this.layout_007()) {
        link.push(obj);
      }

      for (obj of this.layout_007B()) {
        link.push(obj);
      }

      for (obj of this.layout_008A()) {
        link.push(obj);
      }

      this.layouts.sort();

      return link.reverse();
    },
    layout_FPC() {
      var link = [];
      var obj;

      this.layouts = [];
      this.formats = ['PD.gif', 'PZ.gif', 'CP.jpg', 'PD.jpg', 'PZ.jpg', 'TH.jpg'];

      for (obj of this.layout_001()) {
        link.push(obj);
      }

      if (this.greetings.includes('HOLIDAY')) {
        for (obj of this.layout_001HOLIDAY(true)) {
          link.push(obj);
        }

        for (obj of this.layout_007HOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_007BHOLIDAY()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('CHRISTMAS')) {
        for (obj of this.layout_001CHRISTMAS(true)) {
          link.push(obj);
        }

        for (obj of this.layout_007CHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_007BCHRISTMAS()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('NEWYEAR')) {
        for (obj of this.layout_001NEWYEAR(true)) {
          link.push(obj);
        }

        for (obj of this.layout_007NEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_007BNEWYEAR()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('RELIGIOUS')) {
        for (obj of this.layout_001RELIGIOUS(true)) {
          link.push(obj);
        }

        for (obj of this.layout_007RELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_007BRELIGIOUS()) {
          link.push(obj);
        }
      }

      for (obj of this.layout_002C()) {
        link.push(obj);
      }

      for (obj of this.layout_004()) {
        link.push(obj);
      }

      for (obj of this.layout_007()) {
        link.push(obj);
      }

      for (obj of this.layout_007B()) {
        link.push(obj);
      }

      this.layouts.sort();

      return link.reverse();
    },
    layout_HFM() {
      var link = [];
      var obj;

      this.layouts = [];
      this.formats = ['PD.gif', 'CP.jpg', 'PD.jpg', 'PZ.jpg', 'TH.jpg'];

      for (obj of this.layout_001()) {
        link.push(obj);
      }

      if (this.greetings.includes('HOLIDAY')) {
        for (obj of this.layout_001HOLIDAY(true)) {
          link.push(obj);
        }

        for (obj of this.layout_001ZHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_007HOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_007BHOLIDAY()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('CHRISTMAS')) {
        for (obj of this.layout_001CHRISTMAS(true)) {
          link.push(obj);
        }

        for (obj of this.layout_001ZCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_007CHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_007BCHRISTMAS()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('NEWYEAR')) {
        for (obj of this.layout_001NEWYEAR(true)) {
          link.push(obj);
        }

        for (obj of this.layout_001ZNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_007NEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_007BNEWYEAR()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('RELIGIOUS')) {
        for (obj of this.layout_001RELIGIOUS(true)) {
          link.push(obj);
        }

        for (obj of this.layout_001ZRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_007RELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_007BRELIGIOUS()) {
          link.push(obj);
        }
      }

      for (obj of this.layout_002C()) {
        link.push(obj);
      }

      for (obj of this.layout_002D()) {
        link.push(obj);
      }

      for (obj of this.layout_003()) {
        link.push(obj);
      }

      for (obj of this.layout_004()) {
        link.push(obj);
      }

      for (obj of this.layout_006()) {
        link.push(obj);
      }

      for (obj of this.layout_007()) {
        link.push(obj);
      }

      for (obj of this.layout_007B()) {
        link.push(obj);
      }

      for (obj of this.layout_008A()) {
        link.push(obj);
      }

      this.layouts.sort();

      return link.reverse();
    },
    layout_HFS() {
      var link = [];
      var obj;

      this.layouts = [];
      this.formats = ['PD.gif', 'CP.jpg', 'PD.jpg', 'PZ.jpg', 'TH.jpg'];

      for (obj of this.layout_001()) {
        link.push(obj);
      }

      if (this.greetings.includes('HOLIDAY')) {
        for (obj of this.layout_001HOLIDAY(true)) {
          link.push(obj);
        }

        for (obj of this.layout_001AHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001BHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001CHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001DHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001IHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001JHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001MHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001NHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001OHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_007HOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_007BHOLIDAY()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('CHRISTMAS')) {
        for (obj of this.layout_001CHRISTMAS(true)) {
          link.push(obj);
        }

        for (obj of this.layout_001ACHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001BCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001CCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001DCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001ICHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001JCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001MCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001NCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001OCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_007CHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_007BCHRISTMAS()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('NEWYEAR')) {
        for (obj of this.layout_001NEWYEAR(true)) {
          link.push(obj);
        }

        for (obj of this.layout_001ANEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001BNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001CNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001DNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001INEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001JNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001MNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001NNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001ONEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_007NEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_007BNEWYEAR()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('RELIGIOUS')) {
        for (obj of this.layout_001RELIGIOUS(true)) {
          link.push(obj);
        }

        for (obj of this.layout_001ARELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001BRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001CRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001DRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001IRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001JRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001MRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001NRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001ORELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_007RELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_007BRELIGIOUS()) {
          link.push(obj);
        }
      }

      for (obj of this.layout_002C()) {
        link.push(obj);
      }

      for (obj of this.layout_002D()) {
        link.push(obj);
      }

      for (obj of this.layout_003()) {
        link.push(obj);
      }

      for (obj of this.layout_004()) {
        link.push(obj);
      }

      for (obj of this.layout_006()) {
        link.push(obj);
      }

      for (obj of this.layout_007()) {
        link.push(obj);
      }

      for (obj of this.layout_007B()) {
        link.push(obj);
      }

      for (obj of this.layout_008()) {
        link.push(obj);
      }

      for (obj of this.layout_008A()) {
        link.push(obj);
      }

      for (obj of this.layout_009()) {
        link.push(obj);
      }

      this.layouts.sort();

      return link.reverse();
    },
    layout_HSM() {
      var link = [];
      var obj;

      this.layouts = [];
      this.formats = ['CP.jpg', 'PD.jpg', 'PZ.jpg', 'TH.jpg'];

      for (obj of this.layout_001()) {
        link.push(obj);
      }

      for (obj of this.layout_002C()) {
        link.push(obj);
      }

      for (obj of this.layout_004()) {
        link.push(obj);
      }

      for (obj of this.layout_007()) {
        link.push(obj);
      }

      for (obj of this.layout_007B()) {
        link.push(obj);
      }

      for (obj of this.layout_008()) {
        link.push(obj);
      }

      this.layouts.sort();

      return link.reverse();
    },
    layout_HNY_HYC() {
      var link = [];
      var obj;

      this.layouts = [];
      this.formats = ['CP.jpg', 'PD.jpg', 'PZ.jpg', 'TH.jpg'];

      for (obj of this.layout_001()) {
        link.push(obj);
      }

      if (this.greetings.includes('HOLIDAY')) {
        for (obj of this.layout_001HOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001AHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001BHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001CHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001DHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001IHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001JHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001MHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001NHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001OHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_007BHOLIDAY()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('CHRISTMAS')) {
        for (obj of this.layout_001CHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001ACHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001BCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001CCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001DCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001ICHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001JCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001MCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001NCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001OCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_007BCHRISTMAS()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('NEWYEAR')) {
        for (obj of this.layout_001NEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001ANEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001BNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001CNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001DNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001INEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001JNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001MNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001NNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001ONEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_007BNEWYEAR()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('RELIGIOUS')) {
        for (obj of this.layout_001RELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001ARELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001BRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001CRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001DRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001IRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001JRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001MRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001NRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001ORELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_007BRELIGIOUS()) {
          link.push(obj);
        }
      }

      for (obj of this.layout_002C()) {
        link.push(obj);
      }

      for (obj of this.layout_002D()) {
        link.push(obj);
      }

      for (obj of this.layout_003()) {
        link.push(obj);
      }

      for (obj of this.layout_004()) {
        link.push(obj);
      }

      for (obj of this.layout_006()) {
        link.push(obj);
      }

      for (obj of this.layout_007()) {
        link.push(obj);
      }

      for (obj of this.layout_007B()) {
        link.push(obj);
      }

      for (obj of this.layout_008()) {
        link.push(obj);
      }

      for (obj of this.layout_008A()) {
        link.push(obj);
      }

      for (obj of this.layout_009()) {
        link.push(obj);
      }

      this.layouts.sort();

      return link.reverse();
    },
    layout_HMC() {
      var link = [];
      var obj;

      this.layouts = [];
      this.formats = ['CP.jpg', 'PD.jpg', 'PZ.jpg', 'TH.jpg'];

      for (obj of this.layout_001()) {
        link.push(obj);
      }

      if (this.greetings.includes('HOLIDAY')) {
        for (obj of this.layout_001HOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_001ZHOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_007HOLIDAY()) {
          link.push(obj);
        }

        for (obj of this.layout_007BHOLIDAY()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('CHRISTMAS')) {
        for (obj of this.layout_001CHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_001ZCHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_007CHRISTMAS()) {
          link.push(obj);
        }

        for (obj of this.layout_007BCHRISTMAS()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('NEWYEAR')) {
        for (obj of this.layout_001NEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_001ZNEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_007NEWYEAR()) {
          link.push(obj);
        }

        for (obj of this.layout_007BNEWYEAR()) {
          link.push(obj);
        }
      }

      if (this.greetings.includes('RELIGIOUS')) {
        for (obj of this.layout_001RELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_001ZRELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_007RELIGIOUS()) {
          link.push(obj);
        }

        for (obj of this.layout_007BRELIGIOUS()) {
          link.push(obj);
        }
      }

      for (obj of this.layout_002C()) {
        link.push(obj);
      }

      for (obj of this.layout_002D()) {
        link.push(obj);
      }

      for (obj of this.layout_003()) {
        link.push(obj);
      }

      for (obj of this.layout_004()) {
        link.push(obj);
      }

      for (obj of this.layout_006()) {
        link.push(obj);
      }

      for (obj of this.layout_007()) {
        link.push(obj);
      }

      for (obj of this.layout_007B()) {
        link.push(obj);
      }

      for (obj of this.layout_008A()) {
        link.push(obj);
      }

      this.layouts.sort();

      return link.reverse();
    }
  }
}
