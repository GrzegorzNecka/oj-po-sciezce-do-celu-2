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

Vue.component("route-header", {
  methods: {
    setActiveClass: function(siteNr) {
      const id = parseInt(this.$route.params.id);
      console.log(id);
      if (id === siteNr) {
        return true;
      } else {
        return false;
      }
    }
  },
  template: `
			<div class="bg-white rounded-md p-5 shadow-md">
     <p> sasdasd {{setActiveClass()}}</p>
        <nav class="flex flex-row">
            <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                <router-link to="/members/1">Adam</router-link>
            </button>
            <button 
            
            v-bind:class="{ 'text-green-500' : setActiveClass(2)}"
            
            class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
              <router-link to="/members/2">Przemek</router-link>
            </button>
            <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
              <router-link to="/members/3">Marcin</router-link>
            </button>
        </nav>
      </div> `
});

const Member = {
  computed: {
    contact() {
      const id = parseInt(this.$route.params.id);
      const newMembers = members.filter(function(member) {
        return member.id === id;
      });

      return newMembers[0];
    }
  },
  template: `
				<div class="sm:w-1/4 p-2">
					<div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
						<h2 class="text-xl font-medium text-gray-700">{{ contact.first_name}}</h2>
						<span class="text-blue-500 block mb-5">{{ contact.role}}</span>

						<button href="#" class="px-4 py-2 bg-blue-500 text-white rounded-full"
              >Say hello</button>
					</div>
				</div>
`
};

const router = new VueRouter({
  routes: [{ path: "/members/:id", component: Member }]
});

const app = new Vue({ router }).$mount("#app");
