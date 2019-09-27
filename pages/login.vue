<template>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Blog Backend</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form
                  v-on:submit.prevent="login"
                  ref="form"
                >
                  <v-text-field
                    label="Email"
                    name="email"
                    type="text"
                    v-model="form.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="form.password"
                  ></v-text-field>

                  <v-btn type="submit" v-on:click.prevent="login" color="primary">Login</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
  export default {
    layout: 'landing',
    data: () => ({
      form: {
        email: '',
        password: ''
      }
    }),
    methods: {
      async login() {
        this.$auth.login({ data: this.form })
          .then(() => {
              this.$router.push({ name: 'user' });
          });
      }
    }
  }
</script>
