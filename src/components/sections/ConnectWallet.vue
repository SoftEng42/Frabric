<template>
  <div
    class="
    w-full max-w-screen mx-auto flex flex-col justify-items-center items-center
    "
  >
    <SignerAddress class="h-8 m-auto" />
    <div class="m-auto pt-2">
      <input type="checkbox" id="confirmPrimaryKey" v-model="confirmPrimaryKey" />
      <label for="confirmPrimaryKey"> Confirm to have private_key </label>
    </div>
    <div class="m-auto pt-10" v-if="confirmPrimaryKey&&address">
      <Button label="Register Property" customClasses="mx-auto" @click="registerPropery()"/>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

import SignerAddress from '../views/address/SignerAddress.vue'
import Button from '@/components/views/common/Button'

export default {
  name: 'ConnectWallet',
  components: {
    SignerAddress,
    Button,
  },
  data() {
    return {
      confirmPrimaryKey: false
    }
  },
  computed: {
    ...mapGetters({
      address: 'userWalletAddress'
    })
  },
  methods: {
    registerPropery() {
      this.$router.push('/register');
    },
  },
  mounted() {
  },
  watch: {
  }
}
</script>
