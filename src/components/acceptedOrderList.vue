<template>
  <div id="acceptedOrderListContainer">
    <h5>处理中</h5>
    <div id="acceptedOrderListBody">
      <div v-for="orderInfo in acceptedOrderList" :key="orderInfo.orderID">
        <acceptedOrderCard :orderInfo="orderInfo"></acceptedOrderCard>
      </div>
    </div>
  </div>
</template>

<script>
import acceptedOrderCard from '@/components/acceptedOrderCard'

export default {
  name: 'acceptedOrderList',
  components: {
    acceptedOrderCard
  },
  data () {
    return {
    }
  },
  computed: {
    acceptedOrderList () {
      var temp = []
      // 手动追踪
      // eslint-disable-next-line
      this.$store.state.order.acceptedOrderListTracker
      // eslint-disable-next-line
      this.$store.state.order.acceptedOrderList.forEach(e => {
        temp.push(e)
      })
      return temp
    }
  }
}
</script>

<style>
#acceptedOrderListContainer {
  width: 70%;
  min-width: 250px;
  margin: 30px auto 0 auto;
}

#acceptedOrderListBody {
  display: flex;
  flex-wrap: wrap;
}

h5 {
  text-align: left;
  padding-left: 10px;
}

.acceptedOrderViewButton {
  background: white;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  transition: 0.2s;
}

.acceptedOrderViewButton:hover {
  transform: scale(1.05);
  z-index: 1;
}

#acceptedOrderIDBox, #acceptedTableIDBox {
  width: 45%;
}
</style>
