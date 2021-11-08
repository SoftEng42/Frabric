<template>
  <div class="px-8 py-2 flex flex-col items-stretch" :class="customClasses">
    <label for="new-proposal-title"> {{ label }} </label>
    <div class="mt-1 h-12 relative rounded-lg bg-level-2-dark">
      <input
        :type="type"
        name="new-proposal-title"
        id="new-proposal-title"
        class="bg-level-2-dark border-0 focus:ring-action-blue focus:border-action-blue block w-full h-full sm:text-lg rounded-lg"
        :placeholder="label"
        v-model="inputValue"
        >
    </div>
  </div>
</template>

<script>

export default {
  name: 'InputBox',

  props: {
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {},
    customClasses: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      inputValue: this.value,
    }
  },

  computed: {
  },

  methods: {
  },

  watch: {
    inputValue(newValue) {
      this.$emit('valueChanged', newValue);
    }
  }
}
</script>
