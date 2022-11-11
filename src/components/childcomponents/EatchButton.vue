<template>
  <div class="container text-center mb-3">
    <h3>
      Button Test
    </h3>
    <div>
      <button class="btn btn-success" @:click="successAction">Success{{msg}}</button>
      <button class="btn btn-danger" @:click="dangerAction">Danger{{msg}}</button>
      <button class="btn btn-warning" @:click="warningAction">Warning{{msg}}</button>
    </div>
  </div>
  <div class="d-flex justify-content-center border-top" v-if="data.successShow">
    <SuccessTest />
  </div>
  <div class="d-flex justify-content-center border-top" v-if="data.dangerShow">
    <DangerTest />
  </div>
  <div class="d-flex justify-content-center border-top" v-if="data.warningShow">
    <WarningTest />
  </div>
</template>

<script>
import { ref } from 'vue'
import SuccessTest from './SuccessTest.vue'
import DangerTest from './DangerTest.vue'
import WarningTest from './WarningTest.vue'

export default {
    name: "EachButton",
    props: {
        msg: String
    },
    setup() {
        const data = ref({
            successShow: false,
            dangerShow: false,
            warningShow: false,
        });
        const successAction = () => {
            data.value.successShow = !data.value.successShow
        };
        const dangerAction = () => {
            data.value.dangerShow = !data.value.dangerShow
        };
        const warningAction = () => {
            data.value.warningShow = !data.value.warningShow
        };
        return {
            data,
            successAction,dangerAction,warningAction,
        };
    },
    components: { SuccessTest,DangerTest,WarningTest }
}

</script>