<template>
    <button @click="buttonClick()" :type="type" class="botao" :class="defineStyle">{{ label }}</button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                require:true
            },
            label: {
                type: String,
                require:true
            },
            confirm: {
                type: Boolean
            },
            buttonStyle: {
                type: String
            }
        },
        methods: {
            buttonClick() {
                console.log(typeof this.confirm);
                if(!this.confirm) {
                    this.$emit('buttonClick');
                    return ;
                }

                if(confirm(`Tem certeza que deseja fazer isso?`)) {
                    this.$emit('buttonClick');
                    return ;
                }
            }
        },
        computed: {
            defineStyle() {
                switch(this.buttonStyle) {
                    case 'danger': return 'botao-perigo';
                    default: return 'botao-padrao';
                }
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>