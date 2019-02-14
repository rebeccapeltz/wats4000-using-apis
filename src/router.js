import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
// TODO: Import new component
import AdjForNoun from '@/views/AdjForNoun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/adjfornoun',
      name: 'adjfornoun',
      component: AdjForNoun
    }
    // TODO: Add new route definition here.
  ]
})
