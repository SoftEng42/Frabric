<template>
  <div
    class="
    w-full max-w-screen mx-auto flex justify-items-center items-center
    "
  >
    <div class="mx-auto flex flex-col justify-items-center">
      <div class="flex justify-items-between">
        <label style="width: 200px"> Select a file to identify </label>
        <input type="file" @change="previewFiles" accept="image/png,image/jpeg,.pdf" />
      </div>
      <div class="flex justify-items-between py-4" title="There are a maximum of 10 possibilities.">
        <label style="width: 200px"> Select files for jurisdiction </label>
        <input type="file" @change="proveJurisdiction" multiple accept="image/png,image/jpeg,.pdf" />
      </div>
      <v-wait class="flex justify-items-end">
        <template slot="waiting">
          <label> Select a file to identify </label>
        </template>
        <Button label="Submit" customClasses="mx-auto" @click="identify()"/>
      </v-wait>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

import Button from '@/components/views/common/Button'
import IPFSStorageNetwork from '@/data/network/storage/ipfs/IPFSStorageNetwork'

export default {
  name: 'Register',
  components: {
    Button,
  },
  data() {
    return {
      storageNetwork: '',
      identifyFile: '',
      jurisdictionFiles: [],
      govIDPaths: [],
    }
  },
  mounted() {
    this.storageNetwork = new IPFSStorageNetwork()
  },
  computed: {
    ...mapGetters({
      submissions: 'submissions'
    })
  },
  methods: {
    async identify() {
      await this.setGovIDDocuments(this.govIDPaths);
      await this.setLegalDocuments(this.jurisdictionFilePaths);

      localStorage.submissions = JSON.stringify(this.submissions);

      this.$router.push('/review');
    },
    ...mapActions({
      setGovIDDocuments: 'setGovIDDocuments',
      setLegalDocuments: 'setLegalDocuments',
    }),

    async previewFiles(event) {
      this.$wait.start('Uploading file');
      this.govIDPaths = [];
      let fileURL = await this.storageNetwork.addFile(event.target.files[0]);
      this.govIDPaths.push({
        fileURL: fileURL.path
      });
      this.$wait.end('Uploading file');
    },

    async proveJurisdiction(event) {
      this.$wait.start('Uploading file');
      this.jurisdictionFiles = [];
      for (let file in event.target.files) {
        let idFilePath = await this.storageNetwork.addFile(file);
        this.jurisdictionFiles.push({
          fileURL: idFilePath.path
        });
      }
      this.$wait.end('Uploading file');
    }

  },
}
</script>
