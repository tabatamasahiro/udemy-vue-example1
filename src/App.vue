<template>
  <v-app>
    <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>
          マイアドレス帳
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Link One</v-btn>
          <v-btn flat>Link Two</v-btn>
          <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <SideNav/>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav'

export default {
  name: 'App',
  components: {
    SideNav
  },
  data () {
    return {
      //
    }
  }
}
</script>
