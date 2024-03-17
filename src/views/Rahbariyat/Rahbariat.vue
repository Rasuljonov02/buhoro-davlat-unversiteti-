<template>
  <div id="salom">
    <!-- component -->
    <div class="flex flex-col md:pl-[30px] md:pr-[30px] lg:pl-[80px] lg:pr-[80px] p-5 gap-1">
      <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Title
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Author
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Hits
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-100 border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <RouterLink
                      to="/Ergashev-Qalandar-Sharopovich"
                      class="block hover:text-blue-700 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      XIBDO`: Ergashev Qalandar Sharopovich
                    </RouterLink>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Written by Super User
                  </td>
                  <td class="text-sm text-blue-600 font-light px-6 py-4 whitespace-nowrap">
                    Hits: 0
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <RouterLink class="hover:text-blue-700" to="/Bozorov-Nemat-Ergashovich">
                      O`IBDO`: Bozorov Ne'mat Ergashovich</RouterLink
                    >
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Written by Super User
                  </td>
                  <td class="text-sm text-blue-600 font-light px-6 py-4 whitespace-nowrap">
                    Hits: 0
                  </td>
                </tr>
                <tr class="bg-gray-100 border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <RouterLink class="hover:text-blue-700" to="/Мамиров-Феруз-Тўрахонович"
                      >MMIBDO`: Мамиров Феруз Тўрахонович</RouterLink
                    >
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Written by Super User
                  </td>
                  <td class="text-sm text-blue-600 font-light px-6 py-4 whitespace-nowrap">
                    Hits: 0
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <RouterLink class="hover:text-blue-700" to="/Jumaqulov-G`olib-asanovich"
                      >Direktor: Jumaqulov G`olib Hasanovich</RouterLink
                    >
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Written by Super User
                  </td>
                  <td class="text-sm text-blue-600 font-light px-6 py-4 whitespace-nowrap">
                    Hits: 0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  RouterView
}
</script>

<style></style>
