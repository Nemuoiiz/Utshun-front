<!-- 單項商品的頁面 -->
<template>
  <!-- {{ $route.params.id }} -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">{{ product.name }}</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" md="6">
        <v-img :src="product.image"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p v-if="product" class="mb-5">
          商品類別：{{ product.category?.main || '未分類' }}{{ product.category?.sub ? '．' + product.category.sub : '' }}
        </p>
        <p class="mb-5">💲{{ product.price }}</p>
        <p class="mb-5">{{ product.description }}</p>
        <!-- :disabled="isSubmitting" 送出停用表單 -->
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field v-model.number="quantity.value.value" type="number" :error-messages="quantity.errorMessage.value"></v-text-field>
          <!-- :loading="isSubmitting" 送出時載入動畫 -->
          <v-btn type="submit" prepend-icon="mdi-cart" :loading="isSubmitting">加入購物車</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
  <!-- https://vuetifyjs.com/en/components/overlays -->
  <v-overlay :model-value="!product.sell" class="align-center justify-center" scrim="black" opacity="0.8" persistent>
    <h1 class="text-center">{{ '商品未上架' }}</h1>
  </v-overlay>
</template>


<script setup>
import { ref } from 'vue'
import { useAxios } from '@/composables/axios';
// 有 r 做跳轉，沒有 r 取路由資訊 (現在這頁的資訊)
import { useRoute, useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
// 使用者沒有登入的話要引導至登入頁面
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'


// 送到後端需要 jwt 所以取 apiAuth
const { api, apiAuth } = useAxios()
const route = useRoute()
const router = useRouter()
const user = useUserStore()
const createSnackbar = useSnackbar()

// 商品頁面的預設值
const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  // 隨便預設值避免 templete 的 productCategory. 後面接空值
  category: '臉部彩妝'
})

// 跟後端取資料後去調換物件的內容
const getProduct = async () => {
  try {
    const { data } = await api.get('/product/' + route.params.id)
    product.value = data.result
    // 將網站標題改成商品名稱
    document.title = product.value.name + ' ｜ 購物網站'
  } catch (error) {
    console.log(error)
    // 商品不存在、取商品資料有問題時丟回到首頁
    route.push('/')
  }
}
getProduct()

const schema = yup.object({
  quantity: yup
    .number()
    .typeError('商品數量錯誤')
    .required('商品數量必填')
    .positive('商品數量須大於 0')
    .integer('商品數量必須為整數')
})
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1   // 預設數量為 1
  }
})
// v-model.number="quantity.value.value"
const quantity = useField('quantity')   // 綁定 quantity 資料


const submit = handleSubmit(async (values) => {
  if (!user.isLoggedIn) {
    // 沒有登入就丟回登入頁
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/user/cart', {
      // 後端的 models > user.js (cartSchema) 一致
      product: product.value._id,
      // const quantity = useField('quantity')
      quantity: values.quantity
    })
    user.cart = data.result
    createSnackbar({
      text: '商品已加入購物車',
      snackbarProps: {
        color: 'green'
      }
    })
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '未知錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
})
</script>

<style>
body {
  font-size: 18px;
  background-color: #eee8df;
}
</style>

<style scoped>
.v-container{
  font-family:Iansui ;
}
</style>

<route lang="yaml">
  meta:
    title: '商品頁面'
  </route>



