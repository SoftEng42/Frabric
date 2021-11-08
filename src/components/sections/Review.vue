<template>
  <div
    class="
    w-full max-w-screen mx-auto text-center
    "
  >
    Thank you! Your submission is being reviewed by Frabric.
    <div class="w-full h-full flex justify-items-center items-center pt-4">
      <Button label="Tokenize New Property" customClasses="mx-auto" @click="tokenizeNewPropery()"/>
    </div>
  </div>
</template>

<script>

import Button from '@/components/views/common/Button'

export default {
  name: 'Review',
  components: {
    Button,
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    tokenizeNewPropery() {
      localStorage.removeItem('submissions')
      window.location.reload();
    }
  },
  mounted() {
  },
}
</script>
