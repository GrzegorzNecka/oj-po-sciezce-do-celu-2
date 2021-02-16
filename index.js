import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const members = [
  { id: 1, first_name: "Adam", last_name: "Gospodarczyk", role: "Member" },
  { id: 2, first_name: "Przemek", last_name: "Smyrdek", role: "Member" },
  { id: 3, first_name: "Marcin", last_name: "Czarkowski", role: "Member" }
];

// const Memebers = {
//      computed: {
//         members() {
//             return members;
//         }
//     },
//     template: `
//     <div class="bg-white rounded-md p-5 shadow-md">
//         <nav class="flex flex-row">
//             <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
//                 <router-link to="/members/1">Adam</router-link>
//             </button>
//             <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
//               <router-link to="/members/2">Przemek</router-link>
//             </button>
//             <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
//               <router-link to="/members/3">Marcin</router-link>
//             </button>
//         </nav>
//      </div>`
// }

const Member = {
  computed: {
    contact() {
      const id = parseInt(this.$route.params.id);
      const newMembers = members.filter(function(member) {
        return member.id === id;
      })
 
 console.log(newMembers)
 return newMembers[0]
    }
  },
  template: `<div>
    
    <div>{{ contact.first_name}}</div>
    <div>{{ $route.params.id }}</div>
    </div>`
};

const router = new VueRouter({
  routes: [{ path: "/members/:id", component: Member }]
});

const app = new Vue({ router }).$mount("#app");
