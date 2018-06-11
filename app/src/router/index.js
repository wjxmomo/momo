import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from "@/components/index";
import Luntan from "@/components/luntan";
import Us from '@/components/us';
import All from '@/components/pics/all'
import Good from '@/components/pics/good';
import Share from '@/components/pics/share';
import Weex from '@/components/pics/weex';
import Ask from '@/components/pics/ask';
import Job from "@/components/pics/job";
import About from "@/components/us/about";
import Tucao from "@/components/us/tucao";
import Lun from "@/components/Luntan/numone";
import Show from '@/components/show';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      component: index,
      children: [
        {
          path: "/",
          name: "All",
          component: All
        },
        {
          path: "good",
          name: "Good",
          component: Good
        },
        {
          path: "share",
          name: "Share",
          component: Share
        },
        {
          path: "weex",
          name: "Weex",
          component: Weex
        },
        {
          path: "ask",
          name: "Ask",
          component: Ask
        },
        {
          path: "job",
          name: "Job",
          component: Job
        }
      ]
    },
    {
      path: "/luntan",
      name: "Luntan",
      component: Luntan,
      children:[
        {
          path:'/',
          name:'Lun',
          component:Lun,
        }
      ]
    },
    {
      path: "/us",
      name: "Me",
      component: Us,
      children: [
        {
          path: "/",
          name: "About",
          component: About,
        },

        {
          path: "tucao",
          name: "Tucao",
          component: Tucao
        }
      ]
    },
    {
      path:'/show',
      name:'show',
      component:Show,
    },
    {
      path:'/*',
      redirect:'/index',
    }
  ]
});
