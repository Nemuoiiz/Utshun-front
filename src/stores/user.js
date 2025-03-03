// Utilities
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import UserRole from '@/enums/UserRole'

export const useUserStore = defineStore('user', () => {

    // 根據後端 back > controllers > user.js 內 login 時會回傳什麼
    const token = ref('')
    const account = ref('')
    const role = ref()
    const cart = ref(0)

    // 登入者
  const isLoggedIn = computed(() => {
    return token.value.length > 0
  })

  // 管理員
  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  // 產生大頭貼
  const avatarName = computed(() => {
    return account.value || "Guest"
  })

  // controllers > user.js > login 的 result 的 data
  const login = (data) => {
    if(data.token){
      token.value = data.token
    }
    account.value = data.account
    role.value = data.role
    cart.value = data.cart
  }

  // 登出 => 全部變為預設值
  const logout = () => {
    token.value = ''
    account.value = ''
    role.value = UserRole.USER
    cart.value = 0
  }


  return {
    token, account, role, cart,
    isLoggedIn, isAdmin, avatarName,
    login, logout,
  }
}, {
  // 要把資料存在 localstorage (只存放 token)
  persist: {
    key: 'shop-user',
    pick: ['token']
  }
})
