const app = new Vue (
    {
        el: "#root",
        data: {
            emails: []
        },
        mounted() {
            for(let i = 0; i <= 9; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response);
                });
            }
        }
    }
)