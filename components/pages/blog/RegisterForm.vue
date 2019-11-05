<template>
    <v-card
            class="elevation-12"
    >
        <v-toolbar
                color="primary"
                dark
                flat
        >
            <v-toolbar-title>
                Register
            </v-toolbar-title>
        </v-toolbar>

        <loading-bar
                v-if="loading"
        />

        <v-card-text>
            <v-form
                    v-on:submit.prevent="register"
                    ref="form"
            >
                <v-text-field
                        label="First Name"
                        type="text"
                        v-model="form.data.first_name"
                        @input="form.errors.first_name = ''"
                        :error-messages="form.errors.first_name"
                        :disabled="loading"
                />

                <v-text-field
                        label="Last Name"
                        type="text"
                        v-model="form.data.last_name"
                        @input="form.errors.last_name = ''"
                        :error-messages="form.errors.last_name"
                        :disabled="loading"
                />

                <v-text-field
                        label="Slug"
                        type="text"
                        hint="This will form part of your Blog's Slug"
                        v-model="form.data.slug"
                        @input="form.errors.slug = ''"
                        :error-messages="form.errors.slug"
                        :disabled="loading"
                />

                <v-text-field
                        label="Email"
                        type="email"
                        v-model="form.data.email"
                        @input="form.errors.email = ''"
                        :error-messages="form.errors.email"
                        :disabled="loading"
                />

                <v-text-field
                        label="Confirm Email"
                        type="text"
                        v-model="form.data.email_confirmation"
                        @input="form.errors.email_confirmation = ''"
                        :error-messages="form.errors.email_confirmation"
                        :disabled="loading"
                />

                <v-text-field
                        label="Password"
                        type="password"
                        hint="At least 8 characters"
                        v-model="form.data.password"
                        @input="form.errors.password = ''"
                        :error-messages="form.errors.password"
                        :disabled="loading"
                />

                <v-text-field
                        label="Confirm Password"
                        type="password"
                        v-model="form.data.password_confirmation"
                        @input="form.errors.password_confirmation = ''"
                        :error-messages="form.errors.password_confirmation"
                        :disabled="loading"
                />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn
                    type="submit"
                    v-on:click.prevent="register"
                    color="primary"
                    :loading="loading"
            >
                Submit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import LoadingBar from '~/components/pages/general/LoadingBar';

    export default {
        components: {
            LoadingBar,
        },
        data: () => ({
            loading: false,
            form: {
                data: {
                    first_name: '',
                    last_name: '',
                    slug: '',
                    email: '',
                    email_confirmation: '',
                    password: '',
                    password_confirmation: '',
                },
                errors: {
                    first_name: '',
                    last_name: '',
                    slug: '',
                    email: '',
                    email_confirmation: '',
                    password: '',
                    password_confirmation: '',
                },
            },
        }),
        methods: {
            register() {
                if (!this.$refs.form.validate())
                    return;

                this.loading = true;

                this.$axios
                    .post('/users', this.form.data)
                    .then(() => {
                        this.$router.push('/');
                    })
                    .catch((error) => {
                        let errors = error.response.data.errors;

                        for(let field in this.form.errors) {
                          if(errors[field] !== undefined) {
                            this.form.errors[field] = errors[field];
                          }
                        }
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            }
        }
    }
</script>
