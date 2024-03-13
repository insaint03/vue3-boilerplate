<template>
  <v-container>
    <v-row>
      <v-col>
        <list-card title="items" :items="items" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import listCard from '@/components/listCard.vue'
import Item from '@/models/item'

export default {
  name: 'indexView',
  components: {
    listCard,
  },
  data() {
    return {
      items: Item.samples(),
    };
  }
}
</script>