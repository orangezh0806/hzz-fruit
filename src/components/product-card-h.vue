<template>
  <div class="product-card" :class="{vertical: isVertical}">
    <div class="card-img" :class="{error: imgError || !img}">
      <img v-if="!(imgError || !img)" :src="img" @error="imgError = true">
      <span v-else class="fa fa-image"></span>
    </div>
    <div class="card-info">
      <div class="title">
        <slot name="title"> {{title}}</slot>
      </div>
      <div class="desc">
        <slot name="desc"> {{desc}}</slot>
      </div>
      <div class="price">
        <slot name="price">
          <div class="price-label" v-if="!isDiscount">{{priceLabel ? priceLabel + ': ' : ''}}￥{{price}}</div>
          <div class="price-discount" v-else>
            <span class="price-discount-info">{{discountLabel && (discountLabel + ': ')}}<span>￥{{discountPrice}}</span></span>
            <span class="price-origin-info">{{originLabel && (originLabel + ': ')}}<span>￥{{originPrice}}</span></span>
            <slot name="price-right"></slot>
          </div>
        </slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-card-h',
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
    isVertical: {
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/css/variables";

  .product-card {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow: hidden;
    &.vertical {
      flex-flow: column nowrap;
      .card-img {
        height: 30vw;
        width: 30vw;
      }
      .card-info {
        width: 100%;
        padding: 0;
      }
    }
    .card-img {
      display: flex;
      height: 12vh;
      width: 12vh;
      img {
        width: 100%;
        height: 100%;
      }
      &.error {
        background-color: rgba(228, 228, 228, 1);
        color: white;
        align-items: center;
        justify-content: center;
        span {
          display: inline-block;
          width: 25%;
          height: 25%;
          font-size: 2em;
        }
      }
    }
    .card-info {
      flex: 1;
      overflow: hidden;
      padding: 1em 0 1em 2em;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
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
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .price {
        color: @color-private;
        .price-discount {
          color: @color-label;
          .price-discount-info {
            span {
              color: @color-private;
              font-size: 16px;
              font-weight: bold;
            }
            margin-right: 1em;
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
