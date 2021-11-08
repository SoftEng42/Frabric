<template>
  <div
    class="
    w-full max-w-screen mx-auto grid grid-cols-12 gap-2
    "
  >
    <div class="md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6">
      <InputBox label="Property address" type="text" :value="newProposal.address" @valueChanged="newProposal.address=value"/>
      <InputBox label="Monthly rent in dollars" type="number" :value="newProposal.currentRent" @valueChanged="newProposal.address=value"/>
      <InputBox label="Current market value in dollars" type="number" :value="newProposal.marketValue" @valueChanged="newProposal.address=value"/>
      <InputBox label="Area in square feet" type="number" :value="newProposal.area" @valueChanged="newProposal.address=value"/>
      <InputBox label="Number of bedrooms" type="number" :value="newProposal.rooms.bdCount" @valueChanged="newProposal.rooms.bdCount=value"/>
      <InputBox label="Number of bathrooms" type="number" :value="newProposal.rooms.baCount" @valueChanged="newProposal.rooms.baCount=value"/>
      <InputBox label="Annualized yield in percent" type="number" :value="newProposal.grossYieldPct" @valueChanged="newProposal.grossYieldPct=value"/>
      <InputBox label="Year when the property was built" type="number" :value="newProposal.yearBuilt" @valueChanged="newProposal.yearBuilt=value"/>
      <InputBox label="Property picture URL" :value="newProposal.coverImage" @valueChanged="newProposal.coverImage=value"/>
      <InputBox label="Text description of the property" :value="newProposal.description" @valueChanged="newProposal.description=value"/>
      <div class="pt-10 px-8 flex justify-items-end">
        <Button label="Next" customClasses="mx-auto" @click="identify()"/>
      </div>
    </div>
  </div>
</template>

<script>


import { mapGetters, mapActions } from 'vuex'

import InputBox from '@/components/views/common/InputBox'
import Button from '@/components/views/common/Button'

export default {
  name: 'Register',
  components: {
    InputBox,
    Button,
  },
  data() {
    return {
      newProposal: {
        address: "Test address 1",
        currentRent: 1234,
        marketValue: 1234,
        area: 1234,
        rooms: {
            bdCount: 1,
            baCount: 2
        },
        grossYieldPct: 10,
        yearBuilt: 2000,
        coverImage: "Qmqwerty",
        description: "Lorem ipsum.",
        doc: "Qmqwerty",
      }
    }
  },
  computed: {
    ...mapGetters({
      userWalletAddress: 'userWalletAddress'
    })
  },
  methods: {
    identify() {
      this.setProperty({
        ethAddress: this.userWalletAddress,
        property: this.newProposal
      })
      this.$router.push('/identify')
    },
    ...mapActions({
      setProperty: 'setProperty'
    })
  },
  mounted() {
  },
}
</script>
