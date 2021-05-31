import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        // pageTitle: 'Anasayfa',
        // breadcrumb: [
        //   {
        //     text: 'Anasayfa',
        //     active: true,
        //   },
        // ],
      },
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Bilgiler',
        breadcrumb: [
          {
            text: 'Bilgiler',
            active: true,
          },
        ],
      },
    },
	{
		path: '/home2',
		name: 'home2',
		component: () => import('@/views/Home2.vue'),
		meta: {
		  pageTitle: 'Home2',
		  breadcrumb: [
			{
			  text: 'Home2',
			  active: true,
			},
		  ],
		},
	  },

	  {
		path: '/rapor-detay/:raporId/:groupId',
		name: 'rapor-detay',
		
		component: () => import('@/views/RaporDetay.vue'),
		meta: {
		//   breadcrumb: [
		// 	{
		// 	  text: 'Rapor Detay',
		// 	  active: false,
		// 	},
		//   ],
		},
	  },
	{
		path: '/musteri-iliskileri',
		name: 'musteri-iliskileri',
		component: () => import('@/views/MusteriIliskileri.vue'),
		meta: {
		  pageTitle: 'Müşteri İlişkileri',
		  breadcrumb: [
			{
			  text: 'Müşteri İlişkileri',
			  active: true,
			},
		  ],
		},
	  },
	  {
		path: '/insan-kaynaklari',
		name: 'insan-kaynaklari',
		component: () => import('@/views/InsanKaynaklari.vue'),
		meta: {
		  pageTitle: 'İnsan Kaynakları',
		  breadcrumb: [
			{
			  text: 'İnsan Kaynakları',
			  active: true,
			},
		  ],
		},
	  },
	  {
		path: '/depo',
		name: 'depo',
		component: () => import('@/views/Depo.vue'),
		meta: {
		  pageTitle: 'Depo',
		  breadcrumb: [
			{
			  text: 'Depo',
			  active: true,
			},
		  ],
		},
	  },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
	{
		path: '/loginv2',
		name: 'loginv2',
		component: () => import('@/views/LoginV2.vue'),
		meta: {
		  layout: 'full',
		},
	  },
	  {
		path: '/registerv2',
		name: 'registerv2',
		component: () => import('@/views/RegisterV2.vue'),
		meta: {
		  layout: 'full',
		},
	  },
	  {
		path: '/register',
		name: 'register',
		component: () => import('@/views/Register.vue'),
		meta: {
		  layout: 'full',
		},
	  },
	  {
		path: '/resetpassword',
		name: 'resetpassword',
		component: () => import('@/views/ResetPassword.vue'),
		meta: {
		  layout: 'full',
		},
	  },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
