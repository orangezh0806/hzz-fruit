<template>
  <div class="product-card-v">
    <div class="card-img" :class="{error: imgError || !img}">
      <img v-if="!(imgError || !img)" :src="img" @error="imgError = true">
      <span v-else class="fa fa-image"></span>
      <span class="price-origin-info" v-if="isOriginInImg"><span>￥{{originPrice}}</span></span>
      <slot name="tag"></slot>
    </div>
    <div class="card-info">
      <div class="price" v-if="isDiscount">
        <slot name="price">
          <div class="price-discount">
            <span class="price-discount-info">{{discountLabel + ': '}}<span>￥{{discountPrice}}</span></span>
            <span class="price-origin-info"
                  v-if="!isOriginInImg">{{originLabel + ': '}}<span>￥{{originPrice}}</span></span>
          </div>
        </slot>
      </div>
      <div class="title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="desc">
        <slot name="desc">{{desc}}</slot>
      </div>
      <div class="price" v-if="!isDiscount">
        <slot name="price">
          <div class="price-label" :class="{bold: $route.name === 'categoryClothes'}">{{priceLabel? priceLabel + ': ' : ''}}￥{{price}}</div>
          <div class="price-label-bottom" v-if="$route.name === 'categoryClothes'">{{originLabel && (originLabel + ': ')}}<span>￥{{originPrice}}</span></div>
          <slot name="price-right"></slot>
        </slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-card-v',
  data () {
    return {
      imgError: false
    }
  },
  props: {
    img: {
      type: String
    },
    title: {
      type: String
    },
    desc: {
      type: String
    },
    price: {
      type: [Number, String]
    },
    priceLabel: {
      type: String
    },
    isDiscount: {
      type: Boolean
    },
    discountPrice: {
      type: [Number, String]
    },
    discountLabel: {
      type: String,
      default: '秒杀价'
    },
    originPrice: {
      type: [Number, String]
    },
    originLabel: {
      type: String,
      default: '原价'
    },
    isOriginInImg: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/css/variables";

  .product-card-v {
    position: relative;
    text-align: center;
    .card-img {
      display: inline-flex;;
      height: 20vw;
      width: 20vw;
      position: relative;
      margin-bottom: 1em;
      img {
        width: 100%;
        height: 100%;
      }
      .price-origin-info {
        position: absolute;
        right: -2em;
        top: -1em;
        display: inline-block;
        width: 4em;
        height: 4em;
        border-radius: 50%;
        background-color: @color-private;
        font-size: 12px;
        text-decoration: line-through;
        line-height: 4em;
        text-align: center;
        color: white;
      }
      &.error {
        background-color: rgba(228, 228, 228, 1);
        color: white;
        align-items: center;
        justify-content: center;
        .fa {
          display: inline-block;
          width: 25%;
          height: 25%;
          font-size: 2em;
        }
      }
    }
    .card-info {
      width: 100%;
      font-size: 12px;
      & > div {
        margin-bottom: .6em;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .title {
        font-size: 14px;
        color: @color-title;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .desc {
        color: @color-label-light;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price {
        position: relative;
        color: @color-private;
        .price-label {
          font-size: 14px;
          &.bold {
            font-weight: bold;
          }
        }
        .price-label-bottom {
          color: @color-label-light;
          text-decoration: line-through;
        }
        .price-discount {
          color: @color-label;
          .price-discount-info {
            span {
              color: @color-private;
              font-size: 16px;
              font-weight: bold;
            }
          }
          .price-origin-info {
            span {
              text-decoration: line-through;
            }
          }
        }

      }
    }
  }
</style>
