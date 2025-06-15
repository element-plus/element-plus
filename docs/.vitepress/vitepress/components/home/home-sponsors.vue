<script lang="ts" setup>
import { goldSponsors, platinumSponsors } from '../../../config/sponsors'

import SponsorsButton from '../sponsors/sponsors-button.vue'
import SponsorList from './sponsor-list.vue'
</script>

<template>
  <div class="sponsors-container" m="auto">
    <SponsorList :sponsors="platinumSponsors" sponsor-type="platinumSponsor" />
    <SponsorList :sponsors="goldSponsors" sponsor-type="goldSponsor" />

    <sponsors-button round />
  </div>
</template>

<style lang="scss">
.home-page {
  .sponsors-container {
    margin-top: 72px;
    .join {
      text-align: center;
      margin: 0 0 52px 0;
    }
  }

  .sponsor-list {
    --min-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(var(--min-width), 420px));
    justify-content: center;

    &.platinum {
      --min-width: 220px;
    }
    &.gold {
      --min-width: 140px;

      @media (max-width: 720px) {
        --min-width: 160px;
      }
    }
  }

  .sponsor {
    margin: 0 20px 10px;
    height: calc(var(--min-width) / 2);
    align-items: center;
    // for dark mode
    // background-color: var(--bg-color-soft);

    .name {
      font-weight: bold;
      color: var(--text-color);
      font-size: 14px;
    }

    img {
      margin-right: 16px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      margin: 0;
      line-height: 1.8;
      color: var(--text-color-light);
      font-size: 12px;
    }
  }
}
</style>
