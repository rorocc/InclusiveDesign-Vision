<template id="#switch-button">
  <div class="switch-button-control mb-3">
    <div class="switch-button" :class="{ enabled: isEnabled }" @click="toggle" :style="{'--color': color}">
      <div class="button"></div>
    </div>
    <div class="switch-button-label font-semibold">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    template: '#switch-button',
    data() {
        return {
            isEnabled: false
        };
    },
    methods: {
        toggle() {
            this.isEnabled = !this.isEnabled;
            this.$emit("toggle", this.isEnabled);
        },
    },
    emits: ['toggle'],
    props: {
        color: {
            type: String,
            required: false,
            default: '#FFFFFF'
        },
        switchVal: {
          type: Boolean,
          required: false,
          default: false
        }
    },

};
</script>

<style lang="scss">


.switch-button-control {
  display: flex;
  flex-direction: row;
  align-items: center;
  
  .switch-button {
    $switch-button-height: 1.6em;
    $switch-button-color: var(--text-header-color);
    $switch-button-border-thickness: 2px;
    $switch-transition: all 0.3s ease-in-out;
    $switch-is-rounded: true;

    height: $switch-button-height;
    width: calc(#{$switch-button-height} * 2);
    border: $switch-button-border-thickness solid $switch-button-color;
    box-shadow: inset 0px 0px $switch-button-border-thickness 0px
      rgba(0, 0, 0, 0.33);
    border-radius: if($switch-is-rounded, $switch-button-height, 0);

    transition: $switch-transition;

    $button-side-length: calc(
      #{$switch-button-height} - (2 * #{$switch-button-border-thickness})
    );
  
    cursor: pointer;

    .button {
      height: $button-side-length;
      width: $button-side-length;
      border: $switch-button-border-thickness solid $switch-button-color;
      border-radius: if($switch-is-rounded, $button-side-length, 0);
      background: $switch-button-color;

      transition: $switch-transition;
    }

    &.enabled {
      background-color: $switch-button-color;
      box-shadow: none;

      .button {
        background: var(--background-color-secondary);
        transform: translateX(
          calc(#{$button-side-length} + (2 *#{$switch-button-border-thickness}))
        );
      }
    }
  }

  .switch-button-label {
    margin-left: 10px;
  }
}

</style>