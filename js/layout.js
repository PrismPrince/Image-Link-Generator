var mix_layouts = {
  methods: {
    layout_obj(layout, colorway, format) {
      return {
        layout: layout,
        colorway: colorway,
        format: format,
        link: 'https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-' + layout + '_' + colorway + '_' + format + (this.prepend_parameter ? '?_=undefined' : '')
      };
    },
    layout_001(animation_PD = false, animation_PZ = false) {
      var link = [];

      this.layouts.push('001');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001', 'H', 'CP.jpg'));
          if (animation_PZ) link.push(this.layout_obj('001', 'H', 'PZ.gif'));
          if (animation_PD) link.push(this.layout_obj('001', 'H', 'PD.gif'));
        case 'G':
          link.push(this.layout_obj('001', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001', 'G', 'CP.jpg'));
          if (animation_PZ) link.push(this.layout_obj('001', 'G', 'PZ.gif'));
          if (animation_PD) link.push(this.layout_obj('001', 'G', 'PD.gif'));
        case 'F':
          link.push(this.layout_obj('001', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001', 'F', 'CP.jpg'));
          if (animation_PZ) link.push(this.layout_obj('001', 'F', 'PZ.gif'));
          if (animation_PD) link.push(this.layout_obj('001', 'F', 'PD.gif'));
        case 'E':
          link.push(this.layout_obj('001', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001', 'E', 'CP.jpg'));
          if (animation_PZ) link.push(this.layout_obj('001', 'E', 'PZ.gif'));
          if (animation_PD) link.push(this.layout_obj('001', 'E', 'PD.gif'));
        case 'D':
          link.push(this.layout_obj('001', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001', 'D', 'CP.jpg'));
          if (animation_PZ) link.push(this.layout_obj('001', 'D', 'PZ.gif'));
          if (animation_PD) link.push(this.layout_obj('001', 'D', 'PD.gif'));
        case 'C':
          link.push(this.layout_obj('001', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001', 'C', 'CP.jpg'));
          if (animation_PZ) link.push(this.layout_obj('001', 'C', 'PZ.gif'));
          if (animation_PD) link.push(this.layout_obj('001', 'C', 'PD.gif'));
        case 'B':
          link.push(this.layout_obj('001', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001', 'B', 'CP.jpg'));
          if (animation_PZ) link.push(this.layout_obj('001', 'B', 'PZ.gif'));
          if (animation_PD) link.push(this.layout_obj('001', 'B', 'PD.gif'));
        case 'A':
          link.push(this.layout_obj('001', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001', 'A', 'CP.jpg'));
          if (animation_PZ) link.push(this.layout_obj('001', 'A', 'PZ.gif'));
          if (animation_PD) link.push(this.layout_obj('001', 'A', 'PD.gif'));
      }
      return link.reverse();
    },
    layout_001A() {
      var link = [];

      this.layouts.push('001A');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001ACF() {
      var link = [];

      this.layouts.push('001ACF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001ACHRISTMAS() {
      var link = [];

      this.layouts.push('001ACHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001ACHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001ACHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001ACHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001ACHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001ACHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001ACHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001ACHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001ACHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001ACHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001AHOLIDAY() {
      var link = [];

      this.layouts.push('001AHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001AHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001AHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001AHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001AHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001AHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001AHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001AHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001AHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001AHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001ANEWYEAR() {
      var link = [];

      this.layouts.push('001ANEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001ANEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001ANEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001ANEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001ANEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001ANEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001ANEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001ANEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001ANEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001ANEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001ARELIGIOUS() {
      var link = [];

      this.layouts.push('001ARELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001ARELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001ARELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001ARELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001ARELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001ARELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001ARELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001ARELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001ARELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001ARELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001B() {
      var link = [];

      this.layouts.push('001B');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001BC() {
      var link = [];

      this.layouts.push('001BC');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001BCCF() {
      var link = [];

      this.layouts.push('001BCCF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001BCF() {
      var link = [];

      this.layouts.push('001BCF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001BCHRISTMAS() {
      var link = [];

      this.layouts.push('001BCHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001BCHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001BCHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001BCHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001BCHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001BCHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001BCHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001BCHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'B', 'PD.jpg'));
        case 'A':
          link.push(this.layout_obj('001BCHRISTMAS', 'B', 'CP.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001BCHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001BHOLIDAY() {
      var link = [];

      this.layouts.push('001BHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001BHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001BHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001BHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001BHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001BHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001BHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001BHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'B', 'PD.jpg'));
        case 'A':
          link.push(this.layout_obj('001BHOLIDAY', 'B', 'CP.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001BHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001BNEWYEAR() {
      var link = [];

      this.layouts.push('001BNEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001BNEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001BNEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001BNEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001BNEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001BNEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001BNEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001BNEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'B', 'PD.jpg'));
        case 'A':
          link.push(this.layout_obj('001BNEWYEAR', 'B', 'CP.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001BNEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001BRELIGIOUS() {
      var link = [];

      this.layouts.push('001BRELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001BRELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001BRELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001BRELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001BRELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001BRELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001BRELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001BRELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'B', 'PD.jpg'));
        case 'A':
          link.push(this.layout_obj('001BRELIGIOUS', 'B', 'CP.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001BRELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001C() {
      var link = [];

      this.layouts.push('001C');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001CCF() {
      var link = [];

      this.layouts.push('001CCF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001CCHRISTMAS() {
      var link = [];

      this.layouts.push('001CCHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001CCHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001CCHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001CCHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001CCHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001CCHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001CCHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001CCHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'B', 'PD.jpg'));
        case 'A':
          link.push(this.layout_obj('001CCHRISTMAS', 'B', 'CP.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001CCHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001CF() {
      var link = [];

      this.layouts.push('001CF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001CHOLIDAY() {
      var link = [];

      this.layouts.push('001CHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001CHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001CHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001CHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001CHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001CHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001CHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001CHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'B', 'PD.jpg'));
        case 'A':
          link.push(this.layout_obj('001CHOLIDAY', 'B', 'CP.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001CHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001CHRISTMAS(animation_PD = false) {
      var link = [];

      this.layouts.push('001CHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001CHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'H', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001CHRISTMAS', 'H', 'PD.gif'));
        case 'G':
          link.push(this.layout_obj('001CHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'G', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001CHRISTMAS', 'G', 'PD.gif'));
        case 'F':
          link.push(this.layout_obj('001CHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'F', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001CHRISTMAS', 'F', 'PD.gif'));
        case 'E':
          link.push(this.layout_obj('001CHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'E', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001CHRISTMAS', 'E', 'PD.gif'));
        case 'D':
          link.push(this.layout_obj('001CHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'D', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001CHRISTMAS', 'D', 'PD.gif'));
        case 'C':
          link.push(this.layout_obj('001CHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'C', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001CHRISTMAS', 'C', 'PD.gif'));
        case 'B':
          link.push(this.layout_obj('001CHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'B', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001CHRISTMAS', 'B', 'PD.gif'));
        case 'A':
          link.push(this.layout_obj('001CHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001CHRISTMAS', 'A', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001CHRISTMAS', 'A', 'PD.gif'));
      }
      return link.reverse();
    },
    layout_001CNEWYEAR() {
      var link = [];

      this.layouts.push('001CNEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001CNEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001CNEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001CNEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001CNEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001CNEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001CNEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001CNEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001CNEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001CNEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001CRELIGIOUS() {
      var link = [];

      this.layouts.push('001CRELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001CRELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001CRELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001CRELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001CRELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001CRELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001CRELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001CRELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001CRELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001CRELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001D() {
      var link = [];

      this.layouts.push('001D');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001DCF() {
      var link = [];

      this.layouts.push('001DCF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001DCHRISTMAS() {
      var link = [];

      this.layouts.push('001DCHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001DCHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001DCHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001DCHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001DCHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001DCHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001DCHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001DCHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001DCHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001DCHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001DHOLIDAY() {
      var link = [];

      this.layouts.push('001DHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001DHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001DHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001DHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001DHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001DHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001DHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001DHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001DHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001DHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001DNEWYEAR() {
      var link = [];

      this.layouts.push('001DNEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001DNEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001DNEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001DNEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001DNEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001DNEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001DNEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001DNEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001DNEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001DNEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001DRELIGIOUS() {
      var link = [];

      this.layouts.push('001DRELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001DRELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001DRELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001DRELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001DRELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001DRELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001DRELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001DRELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001DRELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001DRELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001E() {
      var link = [];

      this.layouts.push('001E');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001F() {
      var link = [];

      this.layouts.push('001F');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001FCHRISTMAS() {
      var link = [];

      this.layouts.push('001FCHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001FHOLIDAY() {
      var link = [];

      this.layouts.push('001FHOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001FNEWYEAR() {
      var link = [];

      this.layouts.push('001FNEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001FRELIGIOUS() {
      var link = [];

      this.layouts.push('001FRELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001HOLIDAY(animation_PD = false) {
      var link = [];

      this.layouts.push('001HOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001HOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'H', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001HOLIDAY', 'H', 'PD.gif'));
        case 'G':
          link.push(this.layout_obj('001HOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'G', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001HOLIDAY', 'G', 'PD.gif'));
        case 'F':
          link.push(this.layout_obj('001HOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'F', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001HOLIDAY', 'F', 'PD.gif'));
        case 'E':
          link.push(this.layout_obj('001HOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'E', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001HOLIDAY', 'E', 'PD.gif'));
        case 'D':
          link.push(this.layout_obj('001HOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'D', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001HOLIDAY', 'D', 'PD.gif'));
        case 'C':
          link.push(this.layout_obj('001HOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'C', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001HOLIDAY', 'C', 'PD.gif'));
        case 'B':
          link.push(this.layout_obj('001HOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'B', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001HOLIDAY', 'B', 'PD.gif'));
        case 'A':
          link.push(this.layout_obj('001HOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001HOLIDAY', 'A', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001HOLIDAY', 'A', 'PD.gif'));
      }
      return link.reverse();
    },
    layout_001I() {
      var link = [];

      this.layouts.push('001I');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001ICF() {
      var link = [];

      this.layouts.push('001ICF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001ICHRISTMAS() {
      var link = [];

      this.layouts.push('001ICHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001ICHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001ICHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001ICHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001ICHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001ICHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001ICHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001ICHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001ICHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001ICHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001IHOLIDAY() {
      var link = [];

      this.layouts.push('001IHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001IHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001IHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001IHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001IHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001IHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001IHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001IHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001IHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001IHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001INEWYEAR() {
      var link = [];

      this.layouts.push('001INEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001INEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001INEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001INEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001INEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001INEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001INEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001INEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001INEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001INEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001IRELIGIOUS() {
      var link = [];

      this.layouts.push('001IRELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001IRELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001IRELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001IRELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001IRELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001IRELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001IRELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001IRELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001IRELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001IRELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001J() {
      var link = [];

      this.layouts.push('001J');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001JCF() {
      var link = [];

      this.layouts.push('001JCF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001JCHRISTMAS() {
      var link = [];

      this.layouts.push('001JCHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001JCHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001JCHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001JCHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001JCHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001JCHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001JCHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001JCHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001JCHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001JCHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001JHOLIDAY() {
      var link = [];

      this.layouts.push('001JHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001JHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001JHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001JHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001JHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001JHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001JHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001JHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001JHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001JHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001JNEWYEAR() {
      var link = [];

      this.layouts.push('001JNEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001JNEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001JNEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001JNEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001JNEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001JNEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001JNEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001JNEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001JNEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001JNEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001JRELIGIOUS() {
      var link = [];

      this.layouts.push('001JRELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001JRELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001JRELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001JRELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001JRELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001JRELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001JRELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001JRELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001JRELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001JRELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001M() {
      var link = [];

      this.layouts.push('001M');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001MCF() {
      var link = [];

      this.layouts.push('001MCF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001MCHRISTMAS() {
      var link = [];

      this.layouts.push('001MCHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001MCHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001MCHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001MCHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001MCHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001MCHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001MCHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001MCHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001MCHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001MCHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001MHOLIDAY() {
      var link = [];

      this.layouts.push('001MHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001MHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001MHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001MHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001MHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001MHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001MHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001MHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001MHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001MHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001MNEWYEAR() {
      var link = [];

      this.layouts.push('001MNEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001MNEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001MNEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001MNEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001MNEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001MNEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001MNEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001MNEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001MNEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001MNEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001MRELIGIOUS() {
      var link = [];

      this.layouts.push('001MRELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001MRELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001MRELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001MRELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001MRELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001MRELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001MRELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001MRELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001MRELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001MRELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001N() {
      var link = [];

      this.layouts.push('001N');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001NCF() {
      var link = [];

      this.layouts.push('001NCF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001NCHRISTMAS() {
      var link = [];

      this.layouts.push('001NCHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001NCHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001NCHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001NCHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001NCHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001NCHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001NCHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001NCHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001NCHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001NCHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001NEWYEAR(animation_PD = false) {
      var link = [];

      this.layouts.push('001NEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001NEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'H', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001NEWYEAR', 'H', 'PD.gif'));
        case 'G':
          link.push(this.layout_obj('001NEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'G', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001NEWYEAR', 'G', 'PD.gif'));
        case 'F':
          link.push(this.layout_obj('001NEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'F', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001NEWYEAR', 'F', 'PD.gif'));
        case 'E':
          link.push(this.layout_obj('001NEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'E', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001NEWYEAR', 'E', 'PD.gif'));
        case 'D':
          link.push(this.layout_obj('001NEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'D', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001NEWYEAR', 'D', 'PD.gif'));
        case 'C':
          link.push(this.layout_obj('001NEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'C', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001NEWYEAR', 'C', 'PD.gif'));
        case 'B':
          link.push(this.layout_obj('001NEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'B', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001NEWYEAR', 'B', 'PD.gif'));
        case 'A':
          link.push(this.layout_obj('001NEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001NEWYEAR', 'A', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001NEWYEAR', 'A', 'PD.gif'));
      }
      return link.reverse();
    },
    layout_001NHOLIDAY() {
      var link = [];

      this.layouts.push('001NHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001NHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001NHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001NHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001NHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001NHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001NHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001NHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001NHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001NHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001NNEWYEAR() {
      var link = [];

      this.layouts.push('001NNEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001NNEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001NNEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001NNEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001NNEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001NNEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001NNEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001NNEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001NNEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001NNEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001NRELIGIOUS() {
      var link = [];

      this.layouts.push('001NRELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001NRELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001NRELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001NRELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001NRELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001NRELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001NRELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001NRELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001NRELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001NRELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001O() {
      var link = [];

      this.layouts.push('001O');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001OCF() {
      var link = [];

      this.layouts.push('001OCF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001OCHRISTMAS() {
      var link = [];

      this.layouts.push('001OCHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001OCHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001OCHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001OCHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001OCHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001OCHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001OCHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001OCHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001OCHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001OCHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001OHOLIDAY() {
      var link = [];

      this.layouts.push('001OHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001OHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001OHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001OHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001OHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001OHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001OHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001OHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001OHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001OHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001ONEWYEAR() {
      var link = [];

      this.layouts.push('001ONEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001ONEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001ONEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001ONEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001ONEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001ONEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001ONEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001ONEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001ONEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001ONEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001ORELIGIOUS() {
      var link = [];

      this.layouts.push('001ORELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001ORELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001ORELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001ORELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001ORELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001ORELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001ORELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001ORELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001ORELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001ORELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001P() {
      var link = [];

      this.layouts.push('001P');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001Q() {
      var link = [];

      this.layouts.push('001Q');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001R() {
      var link = [];

      this.layouts.push('001R');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001RELIGIOUS(animation_PD = false) {
      var link = [];

      this.layouts.push('001RELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001RELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'H', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001RELIGIOUS', 'H', 'PD.gif'));
        case 'G':
          link.push(this.layout_obj('001RELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'G', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001RELIGIOUS', 'G', 'PD.gif'));
        case 'F':
          link.push(this.layout_obj('001RELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'F', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001RELIGIOUS', 'F', 'PD.gif'));
        case 'E':
          link.push(this.layout_obj('001RELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'E', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001RELIGIOUS', 'E', 'PD.gif'));
        case 'D':
          link.push(this.layout_obj('001RELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'D', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001RELIGIOUS', 'D', 'PD.gif'));
        case 'C':
          link.push(this.layout_obj('001RELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'C', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001RELIGIOUS', 'C', 'PD.gif'));
        case 'B':
          link.push(this.layout_obj('001RELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'B', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001RELIGIOUS', 'B', 'PD.gif'));
        case 'A':
          link.push(this.layout_obj('001RELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001RELIGIOUS', 'A', 'CP.jpg'));
          if (animation_PD) link.push(this.layout_obj('001RELIGIOUS', 'A', 'PD.gif'));
      }
      return link.reverse();
    },
    layout_001S() {
      var link = [];

      this.layouts.push('001S');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001T() {
      var link = [];

      this.layouts.push('001T');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001U() {
      var link = [];

      this.layouts.push('001U');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001V() {
      var link = [];

      this.layouts.push('001V');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_001ZCHRISTMAS() {
      var link = [];

      this.layouts.push('001ZCHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001ZCHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001ZCHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001ZCHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001ZCHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001ZCHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001ZCHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001ZCHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001ZCHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001ZCHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001ZHOLIDAY() {
      var link = [];

      this.layouts.push('001ZHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001ZHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001ZHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001ZHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001ZHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001ZHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001ZHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001ZHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001ZHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001ZHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001ZNEWYEAR() {
      var link = [];

      this.layouts.push('001ZNEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001ZNEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001ZNEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001ZNEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001ZNEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001ZNEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001ZNEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001ZNEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001ZNEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001ZNEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_001ZRELIGIOUS() {
      var link = [];

      this.layouts.push('001ZRELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('001ZRELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('001ZRELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('001ZRELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('001ZRELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('001ZRELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('001ZRELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('001ZRELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('001ZRELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('001ZRELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_002C() {
      var link = [];

      this.layouts.push('002C');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('002C', 'H', 'TH.jpg'));
          link.push(this.layout_obj('002C', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('002C', 'H', 'PD.jpg'));
          link.push(this.layout_obj('002C', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('002C', 'G', 'TH.jpg'));
          link.push(this.layout_obj('002C', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('002C', 'G', 'PD.jpg'));
          link.push(this.layout_obj('002C', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('002C', 'F', 'TH.jpg'));
          link.push(this.layout_obj('002C', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('002C', 'F', 'PD.jpg'));
          link.push(this.layout_obj('002C', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('002C', 'E', 'TH.jpg'));
          link.push(this.layout_obj('002C', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('002C', 'E', 'PD.jpg'));
          link.push(this.layout_obj('002C', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('002C', 'D', 'TH.jpg'));
          link.push(this.layout_obj('002C', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('002C', 'D', 'PD.jpg'));
          link.push(this.layout_obj('002C', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('002C', 'C', 'TH.jpg'));
          link.push(this.layout_obj('002C', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('002C', 'C', 'PD.jpg'));
          link.push(this.layout_obj('002C', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('002C', 'B', 'TH.jpg'));
          link.push(this.layout_obj('002C', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('002C', 'B', 'PD.jpg'));
          link.push(this.layout_obj('002C', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('002C', 'A', 'TH.jpg'));
          link.push(this.layout_obj('002C', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('002C', 'A', 'PD.jpg'));
          link.push(this.layout_obj('002C', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_002D() {
      var link = [];

      this.layouts.push('002D');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('002D', 'H', 'TH.jpg'));
          link.push(this.layout_obj('002D', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('002D', 'H', 'PD.jpg'));
          link.push(this.layout_obj('002D', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('002D', 'G', 'TH.jpg'));
          link.push(this.layout_obj('002D', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('002D', 'G', 'PD.jpg'));
          link.push(this.layout_obj('002D', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('002D', 'F', 'TH.jpg'));
          link.push(this.layout_obj('002D', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('002D', 'F', 'PD.jpg'));
          link.push(this.layout_obj('002D', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('002D', 'E', 'TH.jpg'));
          link.push(this.layout_obj('002D', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('002D', 'E', 'PD.jpg'));
          link.push(this.layout_obj('002D', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('002D', 'D', 'TH.jpg'));
          link.push(this.layout_obj('002D', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('002D', 'D', 'PD.jpg'));
          link.push(this.layout_obj('002D', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('002D', 'C', 'TH.jpg'));
          link.push(this.layout_obj('002D', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('002D', 'C', 'PD.jpg'));
          link.push(this.layout_obj('002D', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('002D', 'B', 'TH.jpg'));
          link.push(this.layout_obj('002D', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('002D', 'B', 'PD.jpg'));
          link.push(this.layout_obj('002D', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('002D', 'A', 'TH.jpg'));
          link.push(this.layout_obj('002D', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('002D', 'A', 'PD.jpg'));
          link.push(this.layout_obj('002D', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_003() {
      var link = [];

      this.layouts.push('003');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('003', 'H', 'TH.jpg'));
          link.push(this.layout_obj('003', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('003', 'H', 'PD.jpg'));
          link.push(this.layout_obj('003', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('003', 'G', 'TH.jpg'));
          link.push(this.layout_obj('003', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('003', 'G', 'PD.jpg'));
          link.push(this.layout_obj('003', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('003', 'F', 'TH.jpg'));
          link.push(this.layout_obj('003', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('003', 'F', 'PD.jpg'));
          link.push(this.layout_obj('003', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('003', 'E', 'TH.jpg'));
          link.push(this.layout_obj('003', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('003', 'E', 'PD.jpg'));
          link.push(this.layout_obj('003', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('003', 'D', 'TH.jpg'));
          link.push(this.layout_obj('003', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('003', 'D', 'PD.jpg'));
          link.push(this.layout_obj('003', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('003', 'C', 'TH.jpg'));
          link.push(this.layout_obj('003', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('003', 'C', 'PD.jpg'));
          link.push(this.layout_obj('003', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('003', 'B', 'TH.jpg'));
          link.push(this.layout_obj('003', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('003', 'B', 'PD.jpg'));
          link.push(this.layout_obj('003', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('003', 'A', 'TH.jpg'));
          link.push(this.layout_obj('003', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('003', 'A', 'PD.jpg'));
          link.push(this.layout_obj('003', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_004() {
      var link = [];

      this.layouts.push('004');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('004', 'H', 'TH.jpg'));
          link.push(this.layout_obj('004', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('004', 'H', 'PD.jpg'));
          link.push(this.layout_obj('004', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('004', 'G', 'TH.jpg'));
          link.push(this.layout_obj('004', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('004', 'G', 'PD.jpg'));
          link.push(this.layout_obj('004', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('004', 'F', 'TH.jpg'));
          link.push(this.layout_obj('004', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('004', 'F', 'PD.jpg'));
          link.push(this.layout_obj('004', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('004', 'E', 'TH.jpg'));
          link.push(this.layout_obj('004', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('004', 'E', 'PD.jpg'));
          link.push(this.layout_obj('004', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('004', 'D', 'TH.jpg'));
          link.push(this.layout_obj('004', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('004', 'D', 'PD.jpg'));
          link.push(this.layout_obj('004', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('004', 'C', 'TH.jpg'));
          link.push(this.layout_obj('004', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('004', 'C', 'PD.jpg'));
          link.push(this.layout_obj('004', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('004', 'B', 'TH.jpg'));
          link.push(this.layout_obj('004', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('004', 'B', 'PD.jpg'));
          link.push(this.layout_obj('004', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('004', 'A', 'TH.jpg'));
          link.push(this.layout_obj('004', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('004', 'A', 'PD.jpg'));
          link.push(this.layout_obj('004', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_005() {
      var link = [];

      this.layouts.push('005');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_006() {
      var link = [];

      this.layouts.push('006');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('006', 'H', 'TH.jpg'));
          link.push(this.layout_obj('006', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('006', 'H', 'PD.jpg'));
          link.push(this.layout_obj('006', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('006', 'G', 'TH.jpg'));
          link.push(this.layout_obj('006', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('006', 'G', 'PD.jpg'));
          link.push(this.layout_obj('006', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('006', 'F', 'TH.jpg'));
          link.push(this.layout_obj('006', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('006', 'F', 'PD.jpg'));
          link.push(this.layout_obj('006', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('006', 'E', 'TH.jpg'));
          link.push(this.layout_obj('006', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('006', 'E', 'PD.jpg'));
          link.push(this.layout_obj('006', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('006', 'D', 'TH.jpg'));
          link.push(this.layout_obj('006', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('006', 'D', 'PD.jpg'));
          link.push(this.layout_obj('006', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('006', 'C', 'TH.jpg'));
          link.push(this.layout_obj('006', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('006', 'C', 'PD.jpg'));
          link.push(this.layout_obj('006', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('006', 'B', 'TH.jpg'));
          link.push(this.layout_obj('006', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('006', 'B', 'PD.jpg'));
          link.push(this.layout_obj('006', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('006', 'A', 'TH.jpg'));
          link.push(this.layout_obj('006', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('006', 'A', 'PD.jpg'));
          link.push(this.layout_obj('006', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_007() {
      var link = [];

      this.layouts.push('007');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('007', 'H', 'TH.jpg'));
          link.push(this.layout_obj('007', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('007', 'H', 'PD.jpg'));
          link.push(this.layout_obj('007', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('007', 'G', 'TH.jpg'));
          link.push(this.layout_obj('007', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('007', 'G', 'PD.jpg'));
          link.push(this.layout_obj('007', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('007', 'F', 'TH.jpg'));
          link.push(this.layout_obj('007', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('007', 'F', 'PD.jpg'));
          link.push(this.layout_obj('007', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('007', 'E', 'TH.jpg'));
          link.push(this.layout_obj('007', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('007', 'E', 'PD.jpg'));
          link.push(this.layout_obj('007', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('007', 'D', 'TH.jpg'));
          link.push(this.layout_obj('007', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('007', 'D', 'PD.jpg'));
          link.push(this.layout_obj('007', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('007', 'C', 'TH.jpg'));
          link.push(this.layout_obj('007', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('007', 'C', 'PD.jpg'));
          link.push(this.layout_obj('007', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('007', 'B', 'TH.jpg'));
          link.push(this.layout_obj('007', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('007', 'B', 'PD.jpg'));
          link.push(this.layout_obj('007', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('007', 'A', 'TH.jpg'));
          link.push(this.layout_obj('007', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('007', 'A', 'PD.jpg'));
          link.push(this.layout_obj('007', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_007B() {
      var link = [];

      this.layouts.push('007B');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('007B', 'H', 'TH.jpg'));
          link.push(this.layout_obj('007B', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('007B', 'H', 'PD.jpg'));
          link.push(this.layout_obj('007B', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('007B', 'G', 'TH.jpg'));
          link.push(this.layout_obj('007B', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('007B', 'G', 'PD.jpg'));
          link.push(this.layout_obj('007B', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('007B', 'F', 'TH.jpg'));
          link.push(this.layout_obj('007B', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('007B', 'F', 'PD.jpg'));
          link.push(this.layout_obj('007B', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('007B', 'E', 'TH.jpg'));
          link.push(this.layout_obj('007B', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('007B', 'E', 'PD.jpg'));
          link.push(this.layout_obj('007B', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('007B', 'D', 'TH.jpg'));
          link.push(this.layout_obj('007B', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('007B', 'D', 'PD.jpg'));
          link.push(this.layout_obj('007B', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('007B', 'C', 'TH.jpg'));
          link.push(this.layout_obj('007B', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('007B', 'C', 'PD.jpg'));
          link.push(this.layout_obj('007B', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('007B', 'B', 'TH.jpg'));
          link.push(this.layout_obj('007B', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('007B', 'B', 'PD.jpg'));
          link.push(this.layout_obj('007B', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('007B', 'A', 'TH.jpg'));
          link.push(this.layout_obj('007B', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('007B', 'A', 'PD.jpg'));
          link.push(this.layout_obj('007B', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_007BCF() {
      var link = [];

      this.layouts.push('007BCF');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_007BCHRISTMAS() {
      var link = [];

      this.layouts.push('007BCHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('007BCHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('007BCHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('007BCHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('007BCHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('007BCHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('007BCHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('007BCHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('007BCHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('007BCHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_007BHOLIDAY() {
      var link = [];

      this.layouts.push('007BHOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('007BHOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('007BHOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('007BHOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('007BHOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('007BHOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('007BHOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('007BHOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('007BHOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('007BHOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_007BNEWYEAR() {
      var link = [];

      this.layouts.push('007BNEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('007BNEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('007BNEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('007BNEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('007BNEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('007BNEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('007BNEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('007BNEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('007BNEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('007BNEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_007BRELIGIOUS() {
      var link = [];

      this.layouts.push('007BRELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('007BRELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('007BRELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('007BRELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('007BRELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('007BRELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('007BRELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('007BRELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('007BRELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('007BRELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_007CHRISTMAS() {
      var link = [];

      this.layouts.push('007CHRISTMAS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('007CHRISTMAS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('007CHRISTMAS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('007CHRISTMAS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('007CHRISTMAS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('007CHRISTMAS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('007CHRISTMAS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('007CHRISTMAS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('007CHRISTMAS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('007CHRISTMAS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_007HOLIDAY() {
      var link = [];

      this.layouts.push('007HOLIDAY');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('007HOLIDAY', 'H', 'TH.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'H', 'PD.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('007HOLIDAY', 'G', 'TH.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'G', 'PD.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('007HOLIDAY', 'F', 'TH.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'F', 'PD.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('007HOLIDAY', 'E', 'TH.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'E', 'PD.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('007HOLIDAY', 'D', 'TH.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'D', 'PD.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('007HOLIDAY', 'C', 'TH.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'C', 'PD.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('007HOLIDAY', 'B', 'TH.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'B', 'PD.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('007HOLIDAY', 'A', 'TH.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'A', 'PD.jpg'));
          link.push(this.layout_obj('007HOLIDAY', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_007NEWYEAR() {
      var link = [];

      this.layouts.push('007NEWYEAR');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('007NEWYEAR', 'H', 'TH.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'H', 'PD.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('007NEWYEAR', 'G', 'TH.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'G', 'PD.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('007NEWYEAR', 'F', 'TH.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'F', 'PD.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('007NEWYEAR', 'E', 'TH.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'E', 'PD.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('007NEWYEAR', 'D', 'TH.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'D', 'PD.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('007NEWYEAR', 'C', 'TH.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'C', 'PD.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('007NEWYEAR', 'B', 'TH.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'B', 'PD.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('007NEWYEAR', 'A', 'TH.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'A', 'PD.jpg'));
          link.push(this.layout_obj('007NEWYEAR', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_007RELIGIOUS() {
      var link = [];

      this.layouts.push('007RELIGIOUS');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('007RELIGIOUS', 'H', 'TH.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'H', 'PD.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('007RELIGIOUS', 'G', 'TH.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'G', 'PD.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('007RELIGIOUS', 'F', 'TH.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'F', 'PD.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('007RELIGIOUS', 'E', 'TH.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'E', 'PD.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('007RELIGIOUS', 'D', 'TH.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'D', 'PD.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('007RELIGIOUS', 'C', 'TH.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'C', 'PD.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('007RELIGIOUS', 'B', 'TH.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'B', 'PD.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('007RELIGIOUS', 'A', 'TH.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'A', 'PD.jpg'));
          link.push(this.layout_obj('007RELIGIOUS', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_008() {
      var link = [];

      this.layouts.push('008');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('008', 'H', 'TH.jpg'));
          link.push(this.layout_obj('008', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('008', 'H', 'PD.jpg'));
          link.push(this.layout_obj('008', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('008', 'G', 'TH.jpg'));
          link.push(this.layout_obj('008', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('008', 'G', 'PD.jpg'));
          link.push(this.layout_obj('008', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('008', 'F', 'TH.jpg'));
          link.push(this.layout_obj('008', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('008', 'F', 'PD.jpg'));
          link.push(this.layout_obj('008', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('008', 'E', 'TH.jpg'));
          link.push(this.layout_obj('008', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('008', 'E', 'PD.jpg'));
          link.push(this.layout_obj('008', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('008', 'D', 'TH.jpg'));
          link.push(this.layout_obj('008', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('008', 'D', 'PD.jpg'));
          link.push(this.layout_obj('008', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('008', 'C', 'TH.jpg'));
          link.push(this.layout_obj('008', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('008', 'C', 'PD.jpg'));
          link.push(this.layout_obj('008', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('008', 'B', 'TH.jpg'));
          link.push(this.layout_obj('008', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('008', 'B', 'PD.jpg'));
          link.push(this.layout_obj('008', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('008', 'A', 'TH.jpg'));
          link.push(this.layout_obj('008', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('008', 'A', 'PD.jpg'));
          link.push(this.layout_obj('008', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_008A() {
      var link = [];

      this.layouts.push('008A');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('008A', 'H', 'TH.jpg'));
          link.push(this.layout_obj('008A', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('008A', 'H', 'PD.jpg'));
          link.push(this.layout_obj('008A', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('008A', 'G', 'TH.jpg'));
          link.push(this.layout_obj('008A', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('008A', 'G', 'PD.jpg'));
          link.push(this.layout_obj('008A', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('008A', 'F', 'TH.jpg'));
          link.push(this.layout_obj('008A', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('008A', 'F', 'PD.jpg'));
          link.push(this.layout_obj('008A', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('008A', 'E', 'TH.jpg'));
          link.push(this.layout_obj('008A', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('008A', 'E', 'PD.jpg'));
          link.push(this.layout_obj('008A', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('008A', 'D', 'TH.jpg'));
          link.push(this.layout_obj('008A', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('008A', 'D', 'PD.jpg'));
          link.push(this.layout_obj('008A', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('008A', 'C', 'TH.jpg'));
          link.push(this.layout_obj('008A', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('008A', 'C', 'PD.jpg'));
          link.push(this.layout_obj('008A', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('008A', 'B', 'TH.jpg'));
          link.push(this.layout_obj('008A', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('008A', 'B', 'PD.jpg'));
          link.push(this.layout_obj('008A', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('008A', 'A', 'TH.jpg'));
          link.push(this.layout_obj('008A', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('008A', 'A', 'PD.jpg'));
          link.push(this.layout_obj('008A', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_008B() {
      var link = [];

      this.layouts.push('008B');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('008B', 'H', 'TH.jpg'));
          link.push(this.layout_obj('008B', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('008B', 'H', 'PD.jpg'));
          link.push(this.layout_obj('008B', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('008B', 'G', 'TH.jpg'));
          link.push(this.layout_obj('008B', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('008B', 'G', 'PD.jpg'));
          link.push(this.layout_obj('008B', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('008B', 'F', 'TH.jpg'));
          link.push(this.layout_obj('008B', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('008B', 'F', 'PD.jpg'));
          link.push(this.layout_obj('008B', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('008B', 'E', 'TH.jpg'));
          link.push(this.layout_obj('008B', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('008B', 'E', 'PD.jpg'));
          link.push(this.layout_obj('008B', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('008B', 'D', 'TH.jpg'));
          link.push(this.layout_obj('008B', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('008B', 'D', 'PD.jpg'));
          link.push(this.layout_obj('008B', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('008B', 'C', 'TH.jpg'));
          link.push(this.layout_obj('008B', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('008B', 'C', 'PD.jpg'));
          link.push(this.layout_obj('008B', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('008B', 'B', 'TH.jpg'));
          link.push(this.layout_obj('008B', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('008B', 'B', 'PD.jpg'));
          link.push(this.layout_obj('008B', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('008B', 'A', 'TH.jpg'));
          link.push(this.layout_obj('008B', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('008B', 'A', 'PD.jpg'));
          link.push(this.layout_obj('008B', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_008C() {
      var link = [];

      this.layouts.push('008C');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_008D() {
      var link = [];

      this.layouts.push('008D');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_008E() {
      var link = [];

      this.layouts.push('008E');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_009() {
      var link = [];

      this.layouts.push('009');

      switch (this.colorway) {
        case 'H':
          link.push(this.layout_obj('009', 'H', 'TH.jpg'));
          link.push(this.layout_obj('009', 'H', 'PZ.jpg'));
          link.push(this.layout_obj('009', 'H', 'PD.jpg'));
          link.push(this.layout_obj('009', 'H', 'CP.jpg'));
        case 'G':
          link.push(this.layout_obj('009', 'G', 'TH.jpg'));
          link.push(this.layout_obj('009', 'G', 'PZ.jpg'));
          link.push(this.layout_obj('009', 'G', 'PD.jpg'));
          link.push(this.layout_obj('009', 'G', 'CP.jpg'));
        case 'F':
          link.push(this.layout_obj('009', 'F', 'TH.jpg'));
          link.push(this.layout_obj('009', 'F', 'PZ.jpg'));
          link.push(this.layout_obj('009', 'F', 'PD.jpg'));
          link.push(this.layout_obj('009', 'F', 'CP.jpg'));
        case 'E':
          link.push(this.layout_obj('009', 'E', 'TH.jpg'));
          link.push(this.layout_obj('009', 'E', 'PZ.jpg'));
          link.push(this.layout_obj('009', 'E', 'PD.jpg'));
          link.push(this.layout_obj('009', 'E', 'CP.jpg'));
        case 'D':
          link.push(this.layout_obj('009', 'D', 'TH.jpg'));
          link.push(this.layout_obj('009', 'D', 'PZ.jpg'));
          link.push(this.layout_obj('009', 'D', 'PD.jpg'));
          link.push(this.layout_obj('009', 'D', 'CP.jpg'));
        case 'C':
          link.push(this.layout_obj('009', 'C', 'TH.jpg'));
          link.push(this.layout_obj('009', 'C', 'PZ.jpg'));
          link.push(this.layout_obj('009', 'C', 'PD.jpg'));
          link.push(this.layout_obj('009', 'C', 'CP.jpg'));
        case 'B':
          link.push(this.layout_obj('009', 'B', 'TH.jpg'));
          link.push(this.layout_obj('009', 'B', 'PZ.jpg'));
          link.push(this.layout_obj('009', 'B', 'PD.jpg'));
          link.push(this.layout_obj('009', 'B', 'CP.jpg'));
        case 'A':
          link.push(this.layout_obj('009', 'A', 'TH.jpg'));
          link.push(this.layout_obj('009', 'A', 'PZ.jpg'));
          link.push(this.layout_obj('009', 'A', 'PD.jpg'));
          link.push(this.layout_obj('009', 'A', 'CP.jpg'));
      }
      return link.reverse();
    },
    layout_010B() {
      var link = [];

      this.layouts.push('010B');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011A() {
      var link = [];

      this.layouts.push('011A');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011ACHRISTMAS() {
      var link = [];

      this.layouts.push('011ACHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011AHOLIDAY() {
      var link = [];

      this.layouts.push('011AHOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011ANEWYEAR() {
      var link = [];

      this.layouts.push('011ANEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011ARELIGIOUS() {
      var link = [];

      this.layouts.push('011ARELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011B() {
      var link = [];

      this.layouts.push('011B');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011BC() {
      var link = [];

      this.layouts.push('011BC');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011BCHRISTMAS() {
      var link = [];

      this.layouts.push('011BCHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011BHOLIDAY() {
      var link = [];

      this.layouts.push('011BHOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011BNEWYEAR() {
      var link = [];

      this.layouts.push('011BNEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011BRELIGIOUS() {
      var link = [];

      this.layouts.push('011BRELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011C() {
      var link = [];

      this.layouts.push('011C');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011CCHRISTMAS() {
      var link = [];

      this.layouts.push('011CCHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011CHOLIDAY() {
      var link = [];

      this.layouts.push('011CHOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011CNEWYEAR() {
      var link = [];

      this.layouts.push('011CNEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011CRELIGIOUS() {
      var link = [];

      this.layouts.push('011CRELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011D() {
      var link = [];

      this.layouts.push('011D');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011DCHRISTMAS() {
      var link = [];

      this.layouts.push('011DCHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011DHOLIDAY() {
      var link = [];

      this.layouts.push('011DHOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011DNEWYEAR() {
      var link = [];

      this.layouts.push('011DNEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011DRELIGIOUS() {
      var link = [];

      this.layouts.push('011DRELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011I() {
      var link = [];

      this.layouts.push('011I');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011ICHRISTMAS() {
      var link = [];

      this.layouts.push('011ICHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011IHOLIDAY() {
      var link = [];

      this.layouts.push('011IHOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011INEWYEAR() {
      var link = [];

      this.layouts.push('011INEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011IRELIGIOUS() {
      var link = [];

      this.layouts.push('011IRELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011J() {
      var link = [];

      this.layouts.push('011J');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011JCHRISTMAS() {
      var link = [];

      this.layouts.push('011JCHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011JHOLIDAY() {
      var link = [];

      this.layouts.push('011JHOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011JNEWYEAR() {
      var link = [];

      this.layouts.push('011JNEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011JRELIGIOUS() {
      var link = [];

      this.layouts.push('011JRELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011M() {
      var link = [];

      this.layouts.push('011M');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011MCHRISTMAS() {
      var link = [];

      this.layouts.push('011MCHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011MHOLIDAY() {
      var link = [];

      this.layouts.push('011MHOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011MNEWYEAR() {
      var link = [];

      this.layouts.push('011MNEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011MRELIGIOUS() {
      var link = [];

      this.layouts.push('011MRELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011N() {
      var link = [];

      this.layouts.push('011N');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011NCHRISTMAS() {
      var link = [];

      this.layouts.push('011NCHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011NHOLIDAY() {
      var link = [];

      this.layouts.push('011NHOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011NNEWYEAR() {
      var link = [];

      this.layouts.push('011NNEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011NRELIGIOUS() {
      var link = [];

      this.layouts.push('011NRELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011O() {
      var link = [];

      this.layouts.push('011O');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011OCHRISTMAS() {
      var link = [];

      this.layouts.push('011OCHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011OHOLIDAY() {
      var link = [];

      this.layouts.push('011OHOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011ONEWYEAR() {
      var link = [];

      this.layouts.push('011ONEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011ORELIGIOUS() {
      var link = [];

      this.layouts.push('011ORELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011P() {
      var link = [];

      this.layouts.push('011P');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011Q() {
      var link = [];

      this.layouts.push('011Q');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011R() {
      var link = [];

      this.layouts.push('011R');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011S() {
      var link = [];

      this.layouts.push('011S');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011T() {
      var link = [];

      this.layouts.push('011T');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011U() {
      var link = [];

      this.layouts.push('011U');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_011V() {
      var link = [];

      this.layouts.push('011V');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_012() {
      var link = [];

      this.layouts.push('012');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_012CHRISTMAS() {
      var link = [];

      this.layouts.push('012CHRISTMAS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_012HOLIDAY() {
      var link = [];

      this.layouts.push('012HOLIDAY');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_012NEWYEAR() {
      var link = [];

      this.layouts.push('012NEWYEAR');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_012RELIGIOUS() {
      var link = [];

      this.layouts.push('012RELIGIOUS');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013A() {
      var link = [];

      this.layouts.push('013A');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013B() {
      var link = [];

      this.layouts.push('013B');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013BC() {
      var link = [];

      this.layouts.push('013BC');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013C() {
      var link = [];

      this.layouts.push('013C');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013D() {
      var link = [];

      this.layouts.push('013D');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013E() {
      var link = [];

      this.layouts.push('013E');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013F() {
      var link = [];

      this.layouts.push('013F');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013I() {
      var link = [];

      this.layouts.push('013I');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013J() {
      var link = [];

      this.layouts.push('013J');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013M() {
      var link = [];

      this.layouts.push('013M');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013N() {
      var link = [];

      this.layouts.push('013N');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013O() {
      var link = [];

      this.layouts.push('013O');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    },
    layout_013Z() {
      var link = [];

      this.layouts.push('013Z');

      switch (this.colorway) {
        //
      }
      return link.reverse();
    }
  }
}
