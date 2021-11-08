import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import MyAssets from '@/components/sections/MyAssets.vue'
import Marketplace from '@/components/sections/Marketplace.vue'
import Swap from '@/components/sections/Swap.vue'
import Voting from '@/components/sections/Voting.vue'
import Proposal from '@/components/sections/Proposal.vue'
import NewProposal from '@/components/sections/NewProposal.vue'
import Register from '@/components/sections/Register.vue'
import Welcome from '@/components/sections/Welcome.vue'
import ConnectWallet from '@/components/sections/ConnectWallet'
import Identify from '@/components/sections/Identify'
import Review from '@/components/sections/Review'

export default new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'begin',
      component: Welcome
    },
    {
      path: '/assets',
      alias: '/',
      name: 'myAssets',
      component: MyAssets
    },
    {
      path: '/market',
      name: 'market',
      component: Marketplace
    },
    {
      path: '/swap',
      name: 'swap',
      component: Swap
    },
    {
      path: '/dao/:assetId/proposals',
      name: 'dao',
      props: true,
      component: Voting
    },
    {
      path: '/dao/:assetId/proposals/:proposalId',
      name: 'proposal',
      props: true,
      component: Proposal
    },
    {
      path: '/dao/:assetId/proposals/create',
      name: 'newProposal',
      props: true,
      component: NewProposal
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/identify',
      name: 'Identify for goverment-issued',
      component: Identify
    },
    {
      path: '/connectWallet',
      name: 'ConnectWallet',
      component: ConnectWallet,
    },
    {
      path: '/review',
      name: 'Review',
      component: Review,
    }
  ]
})
