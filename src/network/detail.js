import {request} from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title;
    this.newprice = itemInfo.lowNowPrice;
    this.lowPrice = itemInfo.lowPrice;
    this.desc = itemInfo.discountDesc;
    this.descColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = shopInfo.services;
  }
}


export class Shops {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.logo = shopInfo.shopLogo;
    this.score = shopInfo.score;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class Details {
  constructor(detailInfo, itemParams) {
    this.image = detailInfo.detailImage[0].list;
    this.key = detailInfo.detailImage[0].key;
    this.desc = detailInfo.desc;
    this.ruledesc = itemParams.rule.desc;
  }
}

export class Params {
  constructor(itemParams) {
    this.set = itemParams.info.set;
    this.table = itemParams.rule.tables;
    this.key = itemParams.rule.key;
  }
}


export class Comments {
  constructor(rate) {
    this.content = rate.content;
    this.extra = rate.extraInfo;
    this.image = rate.images;
    this.style = rate.style;
    this.time = rate.created;
    this.avatar = rate.user.avatar;
    this.uname = rate.user.uname;
  }
}
