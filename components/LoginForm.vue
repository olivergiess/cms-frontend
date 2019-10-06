<template>
    <v-card class="elevation-12">
        <v-toolbar
                color="primary"
                dark
                flat
        >
            <v-toolbar-title>Login</v-toolbar-title>
            <div class="flex-grow-1"></div>
        </v-toolbar>

        <loading-bar :loading="loading"/>

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
                        :disabled="loading"
                ></v-text-field>

                <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        v-model="form.password"
                        :disabled="loading"
                ></v-text-field>

                <v-btn
                    type="submit"
                    v-on:click.prevent="login"
                    color="primary"
                    :disabled="loading"
                >
                    Login
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
    import LoadingBar from '~/components/LoadingBar'

    export default {
        components: {
          LoadingBar
        },
        data: () => ({
            loading: false,
            form: {
                email: '',
                password: ''
            },
        }),
        methods: {
            login() {
                this.loading = true;

                this.$auth.login({
                    data: this.form
                }).then(() => {
                    this.$router.push('/');
                }).finally(() => {
                    this.loading = false;
                })
            }
        }
    }
</script>