var mix_layouts = {
  methods: {
    layout_001(animation_PD = false, animation_PZ = false) {
      var link = [];

      switch (this.colorways) {
        case 'H':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_H_TH.jpg');
        case 'G':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_G_TH.jpg');
        case 'F':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_F_TH.jpg');
        case 'E':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_E_TH.jpg');
        case 'D':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_D_TH.jpg');
        case 'C':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_C_TH.jpg');
        case 'B':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_B_TH.jpg');
        case 'A':
          if (animation_PD) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PD.gif');
          if (animation_PZ) link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PZ.gif');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-001_A_TH.jpg');
      }
      return link;
    },
    layout_001A() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ACF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ACHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001AHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ANEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ARELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BC() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BCCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001BRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001C() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001CCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001CCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001CF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001CHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001CHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001CNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001CRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001D() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001DCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001DCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001DHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001DNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001DRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001E() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001F() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001FCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001FHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001FNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001FRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001HOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001I() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ICF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ICHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001IHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001INEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001IRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001J() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001JCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001JCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001JHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001JNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001JRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001M() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001MCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001MCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001MHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001MNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001MRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001N() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001NCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001NCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001NEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001NHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001NNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001NRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001O() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001OCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001OCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001OHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ONEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001ORELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001P() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001Q() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001R() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001RELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001S() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001T() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001U() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_001V() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_002C() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-002C_A_TH.jpg');
      }
      return link;
    },
    layout_002D() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_003() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_004() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-004_A_TH.jpg');
      }
      return link;
    },
    layout_005() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_006() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-006_A_TH.jpg');
      }
      return link;
    },
    layout_007() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007_A_TH.jpg');
      }
      return link;
    },
    layout_007B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-007B_A_TH.jpg');
      }
      return link;
    },
    layout_007BCF() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007BCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007BHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007BNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007BRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007CHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007HOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007NEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_007RELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_008() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008_A_TH.jpg');
      }
      return link;
    },
    layout_008A() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008A_A_TH.jpg');
      }
      return link;
    },
    layout_008B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_H_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_H_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_H_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_H_TH.jpg');
        case 'G':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_G_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_G_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_G_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_G_TH.jpg');
        case 'F':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_F_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_F_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_F_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_F_TH.jpg');
        case 'E':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_E_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_E_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_E_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_E_TH.jpg');
        case 'D':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_D_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_D_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_D_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_D_TH.jpg');
        case 'C':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_C_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_C_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_C_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_C_TH.jpg');
        case 'B':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_B_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_B_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_B_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_B_TH.jpg');
        case 'A':
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_A_CP.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_A_PD.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_A_PZ.jpg');
          link.push('https://cdn3.minted.com/files/mintedProductsImages/MIN/' + this.prodkind + '/' + this.code + '/' + this.normalize_sku + '-008B_A_TH.jpg');
      }
      return link;
    },
    layout_008C() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_008D() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_008E() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_009() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_010B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011A() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ACHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011AHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ANEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ARELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011BC() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011BCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011BHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011BNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011BRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011C() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011CCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011CHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011CNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011CRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011D() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011DCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011DHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011DNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011DRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011I() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ICHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011IHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011INEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011IRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011J() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011JCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011JHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011JNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011JRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011M() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011MCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011MHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011MNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011MRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011N() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011NCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011NHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011NNEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011NRELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011O() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011OCHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011OHOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ONEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011ORELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011P() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011Q() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011R() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011S() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011T() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011U() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_011V() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_012() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_012CHRISTMAS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_012HOLIDAY() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_012NEWYEAR() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_012RELIGIOUS() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013A() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013B() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013BC() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013C() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013D() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013E() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013F() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013I() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013J() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013M() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013N() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013O() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    },
    layout_013Z() {
      var link = [];

      switch (this.colorways) {
        case 'H':
          // link.push('')
        case 'G':
          // link.push('')
        case 'F':
          // link.push('')
        case 'E':
          // link.push('')
        case 'D':
          // link.push('')
        case 'C':
          // link.push('')
        case 'B':
          // link.push('')
        case 'A':
          // link.push('')
      }
      return link;
    }
  }
}
